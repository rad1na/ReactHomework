import React, { useState } from "react";
import { Layout, Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import Auth from "./Auth";

const { Content } = Layout;

const Home = () => {
  const onFinish = (values) => {
    Auth.authenticate();
    setVisible(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [visible, setVisible] = useState(Auth.getAuth());

  const checkIfLogged = () => {
    if (!visible) {
      return (
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: 400 }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      );
    } else {
      return (
        <Button
          type="primary"
          onClick={() => {
            Auth.signout();
            setVisible(false);
          }}
        >
          Logout
        </Button>
      );
    }
  };

  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <div>{checkIfLogged()}</div>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
