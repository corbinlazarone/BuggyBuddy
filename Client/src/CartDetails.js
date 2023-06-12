import React from 'react'
import { List, Card, Button } from 'antd'
import { Row, Col } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import './css/ShoppingCartDetails.css'
import pic from './icons/test.jpg'

export default function ShoppingCartDetails() {
    var user = 'Corbin'
    var brandName = 'Amazon'
    const pageTitle = `${user} ${brandName} Buggy`;

    const handleCheckout = () => {
        // Handle checkout logic here
        console.log('Checking out all products');
    };

    const products = [
        {
            id: 1,
            title: 'HOK Digital Sport Watch Waterproof for Men with Stopwatch Alarm LED Back Light',
            price: 19.99,
            image: pic,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'HOK Digital Sport Watch Waterproof for Men with Stopwatch Alarm LED Back Light',
            price: 19.99,
            image: pic,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            title: 'Product 1',
            price: 19.99,
            image: pic,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ]

    return (
        // <div style={{ padding: '16px', width: '350px', height: '100vh', overflowY: 'auto' }}>
        //     <div style={{ marginBottom: '60px' }}>
        //         <Row gutter={[16, 16]}>
        //             {products.map((product, index) => (
        //                 <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
        //                     <Card
        //                         hoverable
        //                         cover={<img alt={product.title} src={product.image} style={{ objectFit: 'cover', height: '200px' }} />}
        //                         bodyStyle={{ padding: '12px', textAlign: 'center' }}
        //                         bordered={false}
        //                     >
        //                         <Card.Meta
        //                             title={product.title}
        //                             description={`$${product.price}`}
        //                         />
        //                     </Card>
        //                 </Col>
        //             ))}
        //         </Row>
        //     </div>
        //     <div style={{ position: 'fixed', bottom: '16px', left: '50%', transform: 'translateX(-50%)' }}>
        //         <Button type="primary" onClick={handleCheckout}>
        //             Checkout All
        //         </Button>
        //     </div>
        // </div>
        <div className='parent-container' style={{ textAlign: 'center' }}>
            <h3 className='cart-title'>{pageTitle}</h3>
            <div id='list-container'>
                <div className='scroll-container'>
                    <List
                        // grid={{
                        //     gutter: 16,
                        //     xs: 1,
                        //     sm: 2,
                        //     md: 2,
                        //     lg: 3,
                        //     xl: 4,
                        //     xxl: 4,
                        // }}
                        dataSource={products}
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    cover={
                                        <motion.img
                                            className='image'
                                            style={{ width: 240 }}
                                            alt={item.name} src={item.image}
                                        />
                                    }
                                    hoverable
                                    style={{ width: 240 }}
                                >
                                    <Card.Meta
                                        title={<div className="shopping-card-title">{item.title}</div>}
                                        description={<div className="shopping-card-price">${item.price}</div>}
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