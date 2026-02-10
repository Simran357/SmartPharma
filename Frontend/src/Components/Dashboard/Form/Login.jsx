import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const Login = () => {

  const [state,setState] = useState()
const onFinish = async (values) => {
  console.log("Success:", values);

  try {
    const res = await axios.post(
      "http://localhost:5001/api/registerroute/registercontroller",
      values
    );

    console.log("successful registration", res.data);
    setState(res.data.message);

  } catch (err) {

   
    console.log("ERROR MESSAGE:", err.response?.data?.message);

    setState(err?.response?.data?.message);
  }
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
    return(<>
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
      label="Username"
      name="username"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
    >
      <Input.Password />
    </Form.Item>
     <Form.Item
      label="Confirm Password"
      name="confirmpassword"
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
<div><h1>{state}</h1></div>
</>)}
export default Login;