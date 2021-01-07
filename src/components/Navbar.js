import React from "react";
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Layout>
        <Header
          style={{
            backgroundColor: "black",
            position: "fixed",
            top: "0",
            overflow: "hidden",
          }}
          className="header-color"
          title="Last Person Standing"
          scroll
        >
          <Navigation>
            <Link to="/login">Login</Link>
            <Link to="/member-area">Members Area</Link>
            <Link to="/rules">Rules</Link>
            <Link to="/fixtures">Fixtures</Link>
            <Link to="/results">Results</Link>
          </Navigation>
        </Header>
        <Drawer
          style={{ position: "fixed" }}
          className="drawer-color"
          title="Andrew Harrison"
        >
          <Navigation>
            <Link to="/login">Login</Link>
            <Link to="/member-area">Members Area</Link>
            <Link to="/rules">Rules</Link>
            <Link to="/fixtures">Fixtures</Link>
            <Link to="/results">Results</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  );
};

export default Navbar;
