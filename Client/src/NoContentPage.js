import React from "react";
import { FrownOutlined } from "@ant-design/icons";
import logo from "./icons/buggyBuddyCart.png";
import "./css/NoContentPage.css";

export default function NoContentPage() {
  return (
    <div className="test-container">
      <FrownOutlined style={{ fontSize: "48px" }} />
      <h2 className="message">Sorry, we couldn't find any buggys.</h2>
      <img
        className="no-content-buggy-logo"
        src={logo}
        alt="upside down buggy-buddy"
      />
    </div>
  );
}
