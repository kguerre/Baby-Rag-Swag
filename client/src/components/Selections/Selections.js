import React, { Component } from "react";
import { Form } from "semantic-ui-react";


class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return <Form>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio label="X-Small" value="xs" checked={value === "xs"} onChange={this.handleChange} />
          <Form.Radio label="Small" value="sm" checked={value === "sm"} onChange={this.handleChange} />
          <Form.Radio label="Medium" value="md" checked={value === "md"} onChange={this.handleChange} />
          <Form.Radio label="Large" value="lg" checked={value === "lg"} onChange={this.handleChange} />
        </Form.Group>
        <Form.Button type="submit">Add to Cart</Form.Button>
      </Form>;
  }
}

export default FormExampleSubcomponentControl;
