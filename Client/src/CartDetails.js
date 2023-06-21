import React from "react";
import { List, Card, Button, Input } from "antd";
import { Row, Col } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import "./css/ShoppingCartDetails.css";
import pic from "./icons/test.jpg";
import pic2 from "./icons/atomicHabbitBook.jpg"

export default function ShoppingCartDetails() {
  var user = "Corbin";
  var brandName = "Amazon";
  const pageTitle = `${user} ${brandName} Buggy`;

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log("Checking out all products");
  };

  const products = [
    {
      id: 1,
      title:
        "HOK Digital Sport Watch Waterproof for Men with Stopwatch Alarm LED Back Light",
      price: 19.99,
      image: pic,
    },
    {
      id: 2,
      title:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      price: 19.99,
      image: pic2,
    },
    {
      id: 3,
      title: "Product 1",
      price: 19.99,
      image: pic2,
    },
  ];

  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="parent-container" style={{ textAlign: "center" }}>
      <h3 className="cart-title">{pageTitle}</h3>
      <Input.Search
        placeholder="Search for a product"
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value)}}
        style={{ width: '300px', marginBottom: '16px'}}
      />
      <div id="list-container">
        <div className="scroll-container">
          <List
            dataSource={filteredProducts}
            renderItem={(item) => (
              <List.Item>
                <Card
                  cover={
                    <motion.img
                      className="image"
                      style={{ width: 240 }}
                      alt={item.name}
                      src={item.image}
                    />
                  }
                  hoverable
                  style={{ width: 240 }}
                >
                  <Card.Meta
                    title={
                      <div className="shopping-card-title">{item.title}</div>
                    }
                    description={
                      <div className="shopping-card-price">${item.price}</div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
      <div className="checkout-button-container">
        <Button type="primary" id="checkout-button">
          Checkout
        </Button>
      </div>
    </div>
  );
}
