import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ContactUs from "./ContactUs";
import RickAndMorty from "./RickAndMorty";

const { Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/contactUs">Contact Us</Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<FileOutlined />}>
                <Link to="/RickAndMorty">Rick and Morty</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/contactUs" component={ContactUs}></Route>
            <Route path="/RickAndMorty" component={RickAndMorty}></Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
