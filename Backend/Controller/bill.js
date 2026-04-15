const express = require("express");
const Stripe = require("stripe");

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



const stripePayment= async (req, res) => {
  try {
    const { amount} = req.body;
      console.log(req.body.amount)

    const customer = await stripe.customers.create({
        email: "client@gmail.com",
        name: "John Doe",
        address: {
          line1: "Street 123",
          city: "Toronto",
          state: "ON",
          postal_code: "M5V",
          country: "CA", // ❗ MUST be NON-INDIA for export
        },
      });



    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "payment",


      customer: customer.id,

      billing_address_collection: "required",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Your Service / Product Name",
            },
            unit_amount: amount * 100, // ₹ → paise
          },
          quantity: 1,
        },
      ],

     success_url: `http://localhost:5173/Dashboard/Retailer/Order/${req.body.id}/Billing/OrderSuccess`,
      cancel_url: "http://localhost:5173/Cart",
    });

  
    res.json({
      url: session.url,
      sessionId: session.id,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {stripePayment}