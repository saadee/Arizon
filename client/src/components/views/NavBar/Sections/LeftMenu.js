import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <SubMenu
        title={
          <span style={{ fontWeight: "bold", fontSize: "1rem" }}>Men</span>
        }
      >
        <Menu.Item key="setting:1">
          <Link to="/Mens/Denim">Denim</Link>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <Link to="/Mens/shirts">Shirts</Link>
        </Menu.Item>
        <Menu.Item key="setting:3">
          <Link to="/Mens/tshirts">T-Shirts</Link>
        </Menu.Item>
        <Menu.Item key="setting:4">
          <Link to="/Mens/shoes">Shoes</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        title={
          <span style={{ fontWeight: "bolder", fontSize: "1rem" }}>Women</span>
        }
      >
        <Menu.Item key="setting:5">Option 1</Menu.Item>
        <Menu.Item key="setting:6">Option 2</Menu.Item>

        <Menu.Item key="setting:7">Option 3</Menu.Item>
        <Menu.Item key="setting:8">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        title={
          <span style={{ fontWeight: "bolder", fontSize: "1rem" }}>Kids</span>
        }
      >
        <Menu.Item key="setting:9">Option 1</Menu.Item>
        <Menu.Item key="setting:10">Option 2</Menu.Item>

        <Menu.Item key="setting:11">Option 3</Menu.Item>
        <Menu.Item key="setting:12">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        title={
          <span style={{ fontWeight: "bolder", fontSize: "1rem" }}>
            Accessories
          </span>
        }
      >
        <Menu.Item key="setting:13">Option 1</Menu.Item>
        <Menu.Item key="setting:14">Option 2</Menu.Item>

        <Menu.Item key="setting:15">Option 3</Menu.Item>
        <Menu.Item key="setting:16">Option 4</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
