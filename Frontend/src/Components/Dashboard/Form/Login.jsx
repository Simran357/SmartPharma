import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './Utils/AxiosInstance';
import { contextProvide } from './Utils/Context/CommonContext';
import { useGoogleLogin } from '@react-oauth/google';
const Login = () => {
  const navigate = useNavigate()
  const { setAuth } = useContext(contextProvide)
  const [state, setState] = useState("")
  console.log(state)
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenresponse", tokenResponse.access_token)
      try {
        console.log("response from google ui ", tokenResponse.access_token)

        const res = await axiosInstance.post("/registerroute/auth/google", {
          accessToken: tokenResponse.access_token
        })
        console.log("google data in login page", res)
        setState(res?.data?.message)
        setAuth(true);
        navigate("/Dashboard")

      } catch (error) {
        console.log("error when hiting google backend api", error)
        setState(error?.response?.data?.message)
      }

    },
    onError: () => {
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
        setAuth(true);

     navigate("/Dashboard")
      }
    } catch (err) {
      console.log("ERROR MESSAGE:", err);
      setState(err?.response?.data?.message);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
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
              <Button type="default" onClick={googleLogin}>
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