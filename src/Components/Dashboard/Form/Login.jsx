import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const Login = () => {
const onFinish = values => {
  console.log('Success:', values);
  try{
      const res = axios.post("http://localhost:5001/api/registerroute/registercontroller",values)
      console.log("resgister success",res)

  }catch{(err)=>{
    console.log("api is failed connection",err)
  }}
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
</>)}
export default Login;