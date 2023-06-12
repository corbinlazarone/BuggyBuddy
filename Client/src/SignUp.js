import React, { useState } from "react";
import { Layout, Form, Input, Button, Row, Col } from 'antd';
import { Route, Routes, useNavigate } from "react-router-dom";
import "./css/SignUp.css";

export default function SignUpForm() {

  const [form] = Form.useForm();

  // handle submit form
  const onFinish = (values) => {
    console.log("Received values: ", values);

    form.resetFields();
  };

  // validating password.
  const validatePassword = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (!/[A-Z]/.test(value)) {
        reject('Password must contain at least one uppercase letter');
      } else if (!/[!@#$%^&*]/.test(value)) {
        reject('Password must contain at least one special character');
      } else {
        resolve();
      }
    });
  };

  const navigate = useNavigate();

  return (
    <Form
      className="signup-form"
      name="signup-form"
      onFinish={onFinish}
      form={form}
      style={{ width: "350x" }}
    >
      <Form.Item>
        <div className="signup-title">
        <h2>Sign Up</h2>
        </div>
      </Form.Item>
      <Row gutter={5}>
        <Col span={24} id="first-lastname">
          <Form.Item name="firstName" style={{paddingRight: '5px'}}rules={[{required: true, message: 'Please enter your first name'}]}>
            <Input placeholder="FirstName" maxLength={50} />
          </Form.Item>
          <Form.Item name="lastName" rules={[{required: true, message: 'Please enter your last name'}]}>
            <Input placeholder="LastName" maxLength={50}/>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input style={{ width: "200px" }} placeholder="Email" type="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 6, message: 'Password must be at least 6 characters' },
          { validator: validatePassword },
        ]}
      >
        <Input.Password placeholder="Password" maxLength={50}/>
      </Form.Item>
      <Form.Item>
        <Button id="submit-signup" type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
      <Form.Item className="already-a-member">
        Already a Member? 
        <a onClick={() => navigate("/login")}>
          Log in
        </a>
      </Form.Item>
    </Form>
  );
}
