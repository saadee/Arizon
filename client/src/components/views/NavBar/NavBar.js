import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import logo from './logo2.png'
import { Link } from 'react-router-dom'
const { CloseOutlined } = Icon;

function NavBar() {
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
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <Button
        className="menu__mobile-button"
        type="primary"
        onClick={showDrawer}
        style={{ float: "left", marginRight: "20px" }}
      >
        <Icon type="align-left" />
      </Button>

      <div className="menu__logo" style={{ textAlign: 'left', marginLeft: '0px' }}>
        <a href='/'>
          <img src={logo} alt="" style={{ width: '100%', height: '50px', marginTop: '-10px' }} /></a>
      </div>
      <div className="menu__container" style={{ marginLeft: '0px' }}>
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
          {/* <CloseOutlined /> */}
        </div>

        <Drawer
          title="Basic Drawer"
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

export default NavBar;
