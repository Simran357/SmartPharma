import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './Utils/AxiosInstance';
import { contextProvide } from './Utils/Context/CommonContext';
import { useGoogleLogin } from '@react-oauth/google';
const Login = () => {
  const navigate = useNavigate()
  const { setAuth } = useContext(contextProvide)
  const [state, setState] = useState()
console.log(state)
  const googleLogin= useGoogleLogin({
    onSuccess:async (tokenResponse)=>{
      console.log("tokenresponse",tokenResponse.access_token)
      try{
       console.log("response from google ui " ,tokenResponse.access_token)

<<<<<<< HEAD
  const [state,setState] = useState()  

const onFinish = async (values) => {
  console.log("Success:", values);
  try {
    const res = await axiosInstance.post("/registerroute/LoginController",values);
  
      
   if (res?.data?.success) {   
        alert("Login Successful");
        console.log(res?.data)
     sessionStorage.setItem("jwtToken",res?.data?.jwtToken)
        setState(res?.data?.message)  
            
        navigate("/Users")
=======
    const res =  await axiosInstance.post("/registerroute/auth/google", {
      accessToken:tokenResponse.access_token
    })
   console.log("google data in login page",res)
  sessionStorage.setItem("jwtToken", res?.data?.token)
setAuth(res?.data?.token)
setState(res?.data?.message)
navigate("/Users")
     
      }catch (error){
        console.log("error when hiting google backend api",error)
       setState(error?.response?.data?.message)
>>>>>>> 70ee3806a5686c0647c968ef70dcf02bbbf2fc7d
      }
      
    },
    onError:()=>{
      console.log("login failed")
    }
  })
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const res = await axiosInstance.post("/registerroute/LoginController", values);
      if (res?.data?.success) {
        alert("Login Successful");
        setState(res?.data?.message)
            sessionStorage.setItem("jwtToken",res?.data?.jwtToken)
        setAuth(res?.data?.jwtToken)
          navigate("/Users")
      }
    } catch (err) {
      console.log("ERROR MESSAGE:", err);
      setState(err?.response?.data?.message);
    }
  };

<<<<<<< HEAD
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};   
    return(<>
        <section className='m-8 p-4'>
    <div className='rounded-xl items-center bg-white p-20 flex flex-col border border-gray-200'>
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="email"
      name="email"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
    >
      <Input.Password />
    </Form.Item>
  
   <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
<div>
  <h1>{state}</h1>
  </div>

</div>
</section>
</>)}
export default Login; 
=======
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (<>
    <div className='m-20 p-6   flex flex-col  items-center'>
        <section className="p-20   rounded-xl border border-slate-100 bg-white shadow ">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="email"
            name="email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>



          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="default"  onClick={googleLogin}>
                Contiue with Google
            </Button>
          </Form.Item>
        </Form>


        <div>
          <h1>{state}</h1>
        </div>
    </section>

      </div>
  </>)
}
export default Login;
>>>>>>> 70ee3806a5686c0647c968ef70dcf02bbbf2fc7d
