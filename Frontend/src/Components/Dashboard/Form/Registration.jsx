import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const Register = () => {
const onFinish = values => {
  console.log('Success:', values);
  try{
      const res = axios.post("http://localhost:5001/api/registerroute/registercontroller",values)
      console.log("code commit by b",res)
      .then((res)=>{
        console.log(res.jwtToken)
      }).catch((err)=>{
        console.log(" jwt res failed ", err)
      })

  }catch{(err)=>{
    console.log("api is failed connection",err)
  }}
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
    return(<>
    <section className='m-8 '>
    <div className='rounded-xl bg-white p-20 flex flex-col justify-between border border-gray-200'>
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

    <Form.Item name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  </section>
</>)}
export default Register;