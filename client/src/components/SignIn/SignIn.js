import React from "react";
import {
  Modal,
  Button,
  Row,
  Input,
  Collapsible,
  CollapsibleItem
} from "react-materialize";
import SignUp from "../../components/SignUp";
// import { Link } from "react-router-dom";

// export const SignIn = () => (

// );

const SignInButton = () => (
  <div class="signInBtn">
    <Collapsible popout defaultActiveKey={1}>
      <CollapsibleItem header="Sign In" icon="filter_drama">
        <Row>
          <Input s={9} label="Username" />
          <Input type="password" label="Password" s={9} />
        </Row>
        <div>
          <Modal />
          <SignUp class="signUpBtn" />
          <Modal />
        </div>
      </CollapsibleItem>
    </Collapsible>
  </div>
);
export default SignInButton;
