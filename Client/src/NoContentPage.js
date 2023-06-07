import React from "react";
import { Form } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import logo from "./icons/buggyBuddyCart.png";
import "./css/NoContentPage.css";

export default function NoContentPage() {
  return (
    <Form className="test-container">
      <Form.Item>
        <FrownOutlined style={{ fontSize: "48px" }} />
      </Form.Item>
      <Form.Item>
        <h2 className="message">Sorry, we couldn't find any buggys.</h2>
      </Form.Item>
      <Form.Item>
        <img
          className="no-content-buggy-logo"
          src={logo}
          alt="upside down buggy-buddy"
        />
      </Form.Item>
    </Form>
  );
}
