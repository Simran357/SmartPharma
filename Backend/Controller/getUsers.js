const getUserModel = require("../model/Register.model")
const bcrypt = require("bcrypt")  
const nodemailer = require("nodemailer");

const createNewUser = async (req, res, next) => {

    try {
        console.log("form da data through body ", req.body)
        const { username, email, password, pharmacyName, contact, location, license, role } = req.body;


        // check existing user
        const existingUser = await getUserModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const hashPw = await bcrypt.hash(password, 10)

        const newUser = new getUserModel({
            username,
            email,
            password: hashPw,
            pharmacyName,
            contact,
            license,
            location,
            role
        })

        await newUser.save()
          // 📧 email send notifiations
          console.log("EMAIL FUNCTION CALLED");
       await sendEmail(email, password);
    
     
        res.status(200).json({
            success: true,
            message: "User created successfully and email sent successfully",
            data: newUser
        })
    } catch (error) {
        console.log(" eh error try di crate user de tym te ", error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const sendEmail = async (to, password) => {
  try {   
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "your_email@gmail.com",
      to: to,
      subject: "Account Created",
      html: `
        <h3>Your account has been created</h3>
        <p>Email: ${to}</p>
        <p>Password: ${password}</p>
        <p style="color:red;">Please change your password after login</p>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Email error:", error);
  }
};

const getUsers = async (req, res, next) => {
    try {
        const users = await getUserModel.find()
        //   console.log("users in get user controller", users)
        res.json({
            success: true,
            data: users
        });
    } catch (error) {
        console.log("error in get user controller")
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const updateRoleController = async (req, res, next) => {

    try {
        const { id } = req.params
        const { role } = req.body

        const updatedUser = await getUserModel.findByIdAndUpdate(
            id,
            { role },
            { new: true }
        )
        res.json({
            success: true,
            message: "Role updated successfully",
            data: updatedUser
        })

    } catch (error) {
        console.log("error in update role controller")
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}
module.exports = { getUsers, updateRoleController, createNewUser } 