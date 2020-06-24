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
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";

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
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<PieChartOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<DesktopOutlined />}>
                <Link to="/dashboard/contactUs">Contact Us</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<FileOutlined />}>
                <Link to="/dashboard/RickAndMorty">Rick and Morty</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
            ></PrivateRoute>
            <PrivateRoute
              path="/dashboard/contactUs"
              component={ContactUs}
            ></PrivateRoute>
            <PrivateRoute
              path="/dashboard/RickAndMorty"
              component={RickAndMorty}
            ></PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
