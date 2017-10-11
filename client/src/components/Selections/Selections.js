// import React, { Component } from "react";
// import { Form } from "semantic-ui-react";


// class FormExampleSubcomponentControl extends Component {
//   state = {};

//   handleChange = (e, { value }) => this.setState({ value });

//   render() {
//     const { value } = this.state;
//     return <Form>
//         <Form.Group inline>
//           <label>Size</label>
//           <Form.Radio label="X-Small" value="xs" checked={value === "xs"} onChange={this.handleChange} />
//           <Form.Radio label="Small" value="sm" checked={value === "sm"} onChange={this.handleChange} />
//           <Form.Radio label="Medium" value="md" checked={value === "md"} onChange={this.handleChange} />
//           <Form.Radio label="Large" value="lg" checked={value === "lg"} onChange={this.handleChange} />
//         </Form.Group>
//         <Form.Button type="submit">Add to Cart</Form.Button>
//       </Form>;
//   }
// }

// export default FormExampleSubcomponentControl;
import React from "react";
import { Dropdown, Button } from "semantic-ui-react";


const DropdownExampleSearchSelectionTwo = () => (
  <div>
    <Dropdown
      placeholder="Size"
      search
      selection
      options={[
        { key: "XS", value: "X-Small", text: "X-Small" },
        { key: "SM", value: "Small", text: "Small" },
        { key: "MD", value: "Medium", text: "Medium" },
        { key: "L", value: "Large", text: "Large" }
      ]}
    />
    <br/>
    <br />
    <Button>Add to Cart</Button>
  </div>
);

export default DropdownExampleSearchSelectionTwo;
