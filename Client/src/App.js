import Home from "./content";
import "./css/App.css";
import logo from "./icons/buggyBuddyLogo.png";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout, Avatar, Button } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import NoContentPage from "./NoContentPage";
import { useEffect, useState } from "react";
const { Header, Footer, Content } = Layout;

export default function App() {

  // const [pageLoaded, setPageLoaded] = useState(false);
  // useEffect(() => {
  //   setPageLoaded(true)
  // }, [])

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "500px" }}>
      <Header className="Header">
        <img className="buggyPopUpLogo" src={logo} alt="fast cart logo" />
          <Button
            type="text"
            className="close-icon"
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
      <Content className="content">
        <Routes>
          <Route exact path="/profile" element={<NoContentPage />} />
          {/* profile */}
          <Route exact path="/popup.html" element={<Home />} />
          {/* Home page */}
        </Routes>
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
          onClick={() => navigate("/profile")}
          icon={<UserOutlined />}
          type="primary"
          shape="round"
          size="large"
        />
      </Footer>
    </Layout>
  );
}
