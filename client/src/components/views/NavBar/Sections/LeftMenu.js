import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>Men</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu title={<span>Women</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:5">Option 1</Menu.Item>
          <Menu.Item key="setting:6">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:7">Option 3</Menu.Item>
          <Menu.Item key="setting:8">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu title={<span>Kids</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:9">Option 1</Menu.Item>
          <Menu.Item key="setting:10">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:11">Option 3</Menu.Item>
          <Menu.Item key="setting:12">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu title={<span>Households</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:13">Option 1</Menu.Item>
          <Menu.Item key="setting:14">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:15">Option 3</Menu.Item>
          <Menu.Item key="setting:16">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
