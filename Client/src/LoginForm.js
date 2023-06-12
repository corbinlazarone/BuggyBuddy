import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginForm.css'

export default function LoginForm() {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    // handle submit form
    const onFinish = (values) => {
        console.log("Received values: ", values);

        form.resetFields();
    };


    return (
        <Form className='login-form' name='login-form' onFinish={onFinish}>
            <Form.Item>
                <div className='login-title'>
                    <h2>Login</h2>
                </div>
            </Form.Item>
            <Form.Item name='email' rules={[{ required: true, message: 'Please enter your email' }]}>
                <Input style={{ width: '200px' }} placeholder='Email' type='email' />
            </Form.Item>
            <Form.Item name='Password' rules={[{ required: true, message: 'Please enter your password' }]}>
                <Input.Password placeholder='Password' maxLength={50} />
            </Form.Item>
            <Form.Item>
                <Button id='submit-login' type='primary' htmlType='submit'>
                    Login
                </Button>
            </Form.Item>
            <Form.Item className='not-a-member'>
                Dont't Have an Account?
                <a onClick={() => navigate('/signup')}>
                    Sign Up
                </a>
            </Form.Item>
        </Form>
    );
}