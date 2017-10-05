import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class MenuExampleSizeMassive extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return <Menu inverted size="massive">
        <Menu.Item name="Baby Rag Swag" />

        <Menu.Menu position="right">
          <Menu.Item name="home" 
           position="right" 
           active={activeItem === "home"} 
           onClick={this.handleItemClick} />
          <Menu.Item name="Shopping Cart" 
           position="right" 
           active={activeItem === "Shopping Cart"} 
           onClick={this.handleItemClick} />
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign In</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>;
  }
}
