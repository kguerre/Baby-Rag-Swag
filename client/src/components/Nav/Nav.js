import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import ShoppingCartBtn from "../../components/ShoppingCartBtn";

export default class MenuExampleSizeMassive extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return <Menu inverted size="massive">
        <Menu.Item name="Baby Rag Swag" />

        <Menu.Menu position="right">
        <Link to ="/">
          <Menu.Item name="home"
           position="right"
           active={activeItem === "home"}
           onClick={this.handleItemClick} />
          </Link>
          <Menu.Item>
            <ShoppingCartBtn />
          </Menu.Item>
          <Menu.Item>
            <Link to= "/signup"><Button primary>Sign Up</Button></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to= "/signin"><Button primary>Sign In</Button></Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>;
  }
}
