import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout, Avatar, Button } from "antd";
import { useEffect, useState } from "react";
import { UserOutlined, HomeOutlined, CloseCircleOutlined, } from "@ant-design/icons";

// Styling
import "./css/App.css";
import logo from "./icons/buggyBuddyCart.png";

// Components
import NoContentPage from "./NoContentPage";
import SignUpForm from "./SignUp";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import ShoppingCartDetails from "./CartDetails";
import Home from "./content";

const { Header, Footer, Content } = Layout;

export default function App() {

  const navigate = useNavigate();

  return (
    <Layout style={{ height: '500px', maxWidth: '350px', }}>
      <Header className="Header">
        <img className="buggyPopUpLogo" src={logo} alt="fast cart logo" />
        <Button
          type="text"
          id="close-icon"
          onClick={() => {
            window.close();
          }}
          icon={
            <CloseCircleOutlined
              type="close-circle"
              style={{ fontSize: "28px" }}
            />
          }
        />
      </Header>
      <Content className='custom-content'>
        <div className='scroll-content'>
        <Routes>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/popup.html" element={<Home />} />
            <Route exact path="/noContent" element={<NoContentPage />} />
            <Route exact path='/login' element={<LoginForm />} />
            <Route exact path='/signup' element={<SignUpForm />} />
            <Route exact path='/cartDetails' element={<ShoppingCartDetails />} />
          </Routes>
        </div>
      </Content>
      <Footer className="footer">
        <Button
          id="homeButton"
          onClick={() => navigate("/popup.html")}
          icon={<HomeOutlined />}
          type="primary"
          shape="round"
          size="large"
        />
        <Button
          id="profileButton"
          onClick={() => navigate("/signup")}
          icon={<UserOutlined />}
          type="primary"
          shape="round"
          size="large"
        />
      </Footer>
    </Layout>
  );
}
