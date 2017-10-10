import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./Menu.css";

export default class MenuExampleText extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return <Menu text className="menu">
        <Menu.Item header>Apparel</Menu.Item>
        <Menu.Item name="tops" active={activeItem === "tops"} onClick={this.handleItemClick} href="/Clothes" />
        <Menu.Item name="bottoms" active={activeItem === "bottoms"} onClick={this.handleItemClick} href="/Clothes"/>
        <Menu.Item name="outerwear" active={activeItem === "outerwear"} onClick={this.handleItemClick} />
        <Menu.Item name="accessories" active={activeItem === "accessories"} onClick={this.handleItemClick} />
      </Menu>;
  }
}
