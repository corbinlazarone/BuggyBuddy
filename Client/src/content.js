import React from "react";
import { Card, Avatar } from "antd";
import './css/content.css'

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
  ];

  const cardWidth = 350 / 4 - 20; // determing the length of each card for cart holders.

  return (
    <div className="all-content">
      <div className="user-buggys">
        <h3>Corbin's Active Buggys</h3>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {shoppingItems.map((item, index) => (
          <Card
            key={index}
            style={{
              width: cardWidth,
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt=""
                src={item.favicon}
                style={{ width: 24, height: 24 }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
