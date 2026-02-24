import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './Utils/AxiosInstance';
import { contextProvide } from './Utils/Context/CommonContext';
const Login = () => {
  const navigate = useNavigate()
  const { setAuth } = useContext(contextProvide)
  const [state, setState] = useState()

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const res = await axiosInstance.post("/registerroute/LoginController", values);


      if (res?.data?.success) {
        alert("Login Successful");
        setState(res?.data?.message)

        setAuth(res?.data?.jwtToken)
        navigate("/Users")
      }
    } catch (err) {
      console.log("ERROR MESSAGE:", err);
      setState(err?.response?.data?.message);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (<>
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
  </>)
}
export default Login;