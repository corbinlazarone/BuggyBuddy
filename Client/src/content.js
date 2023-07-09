import React from "react";
import { Card, Avatar, Button } from "antd";
import "./css/content.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const shoppingItems = [
    {
      id: 1,
      name: "Amazon",
      url: "https://www.amazon.com",
      favicon: "https://www.amazon.com/favicon.ico",
    },
    {
      id: 2,
      name: "eBay",
      url: "https://www.ebay.com",
      favicon: "https://www.ebay.com/favicon.ico",
    },
    {
      id: 3,
      name: "Walmart",
      url: "https://www.walmart.com",
      favicon: "https://www.walmart.com/favicon.ico",
    },
    {
      id: 4,
      name: "Target",
      url: "https://www.target.com",
      favicon: "https://www.target.com/favicon.ico",
    },
    {
      id: 5,
      name: "Amazon",
      url: "https://www.amazon.com",
      favicon: "https://www.amazon.com/favicon.ico",
    },
    {
      id: 6,
      name: "eBay",
      url: "https://www.ebay.com",
      favicon: "https://www.ebay.com/favicon.ico",
    },
    {
      id: 7,
      name: "Walmart",
      url: "https://www.walmart.com",
      favicon: "https://www.walmart.com/favicon.ico",
    },
    {
      id: 8,
      name: "Target",
      url: "https://www.target.com",
      favicon: "https://www.target.com/favicon.ico",
    },
  ];

  const cardWidth = 350 / 4 - 20; // determing the length of each card for cart holders.
  const navigate = useNavigate();

  return (
    <div className="all-content">
      <div className="user-buggys">
        <p className="cart-title">Corbin's Active Buggys</p>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {shoppingItems.slice(0, 8).map((item, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: cardWidth,
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center"}}>
              <Button
                type="link"
                onClick={() => navigate("/cartDetails")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  src={item.favicon}
                  style={{ width: 24, height: 24 }}
                />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
