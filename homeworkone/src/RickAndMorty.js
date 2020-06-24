import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

const RickAndMorty = () => {
  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          RICK AND Morty
        </div>
      </Content>
    </Layout>
  );
};

export default RickAndMorty;
