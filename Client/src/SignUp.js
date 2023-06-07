import React from "react";
import { Form, Input, Button } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import logo from "./icons/buggyBuddyCart.png";
import "./css/SignUp.css";

export default function SignUpForm() {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  const navigate = useNavigate();

  return (
    <Form
      className="signup-form"
      name="signup-form"
      onFinish={onFinish}
      style={{ width: "350x" }}
    >
      <Form.Item>
        <div className="signup-title">
        <h2>Sign Up</h2>
        </div>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input style={{ width: "200px" }} placeholder="Email" type="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button id="submit-signup" type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
      <Form.Item className="already-a-member">
        Already a Member?
        <a onClick={() => navigate("/noContent")}>
            Log in
        </a>
      </Form.Item>
    </Form>
  );
}
