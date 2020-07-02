import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon, Menu, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Sections/Navbar.css";
import logo from "./logo2.png";
import more from "./more.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: "8%",
        overflowY: "hidden",
      }}
    >
      <Button
        className="menu__mobile-button"
        onClick={showDrawer}
        style={{ float: "left", marginRight: "20px" }}
      >
        <img  src={more} style={{ width: "100%" }} />
      </Button>

      <div
        className="menu__logo"
        style={{ textAlign: "left", marginLeft: "0px" }}
      >
        <a href="/">
          <img 
          className='siteLogo'
            src={logo}
            alt=""
            style={{ width: "100%", height: "90px", marginTop: "-33px" }}
          />
        </a>
      </div>
      <div className="menu__container" style={{ marginLeft: "0px" }}>
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
          {/* <CloseOutlined /> */}
        </div>
        <div style={{ float: "right" }}>
          <Menu>
            <Menu.Item key="app" style={{ marginTop: "6px" }}>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Badge count={props.cart.cartItems.length}>
                  <ShoppingCartOutlined style={{ fontSize: "30px" }} />
                </Badge>
              </Link>
            </Menu.Item>
          </Menu>
        </div>

        <Drawer
          title={
            <img
            src={logo}
            alt=""
            style={{ width: "70%", height: "50px", marginTop: "-10px" }}
          />
          }
          placement="left"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(NavBar);
