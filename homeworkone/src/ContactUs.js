import React from "react";
import { Layout, Form, Input, Button } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

const { Content } = Layout;

const ContactUs = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: `Pleaset input name`,
    types: {
      email: `Please input email`,
    },
  };

  const onFinish = (values) => {
    console.log(values.user);
    axios
      .post("https://jsonblob.com/api/jsonBlob/", {
        name: values.user.name,
        email: values.user.email,
        message: values.user.message,
      })
      .then((res) => console.log(res));
  };

  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, width: 500 }}
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "message"]} label="Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default ContactUs;
