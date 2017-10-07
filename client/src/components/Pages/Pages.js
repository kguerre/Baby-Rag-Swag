import React, { Component } from "react";
import { Menu, Row, Grid } from "semantic-ui-react";
import "./Pages.css";

export default class MenuExamplePagination extends Component {
  state = { activeItem: "1" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    <Grid.Row>
    <Menu pagination className="pages">
        <Menu.Item name="1" active={activeItem === "1"} onClick={this.handleItemClick} />
        <Menu.Item name="2" active={activeItem === "2"} onClick={this.handleItemClick} />
        <Menu.Item name="3" active={activeItem === "3"} onClick={this.handleItemClick} />
        <Menu.Item name="4" active={activeItem === "4"} onClick={this.handleItemClick} />
        <Menu.Item name="5" active={activeItem === "5"} onClick={this.handleItemClick} />
      </Menu>
    </Grid.Row>
    )
  }
}
