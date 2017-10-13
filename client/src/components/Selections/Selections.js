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
