import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

const Register = () => {
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


    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  <h1 className='text-black'>{state}</h1>
  </section>
</>)}
export default Register;