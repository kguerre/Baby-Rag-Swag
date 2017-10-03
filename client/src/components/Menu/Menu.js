import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

const Menu = () => (
  <Collapsible accordion>
    <CollapsibleItem header="Menu" icon="filter_drama">
    <ul>
      <a href="#"><li>Tops</li></a>
      <a href="#"><li>Bottoms</li></a>
      <a href="#"><li>Outerwear</li></a>
      <a href="#"><li>Accessories</li></a>
    </ul>
    </CollapsibleItem>
  </Collapsible>
);

export default Menu;
