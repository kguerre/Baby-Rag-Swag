import React, {Component} from "react";
import {
  Modal,
  Button,
  Row,
  Input,
  Collapsible,
  CollapsibleItem, 
  Icon
} from "react-materialize";
import SignUp from "../../components/SignUp";
// import { Link } from "react-router-dom";

// export const SignIn = () => (

// );

// const SignInButton = () => (
//   <div class="signInBtn">
//     <Collapsible popout defaultActiveKey={1}>
//       <CollapsibleItem header="Sign In" icon="filter_drama">
//         <Row>
//           <Input s={9} label="Username" />
//           <Input type="password" label="Password" s={9} />
//         </Row>
//         <div>
//           <Modal />
//           <SignUp class="signUpBtn" />
//           <Modal />
//         </div>
//       </CollapsibleItem>
//     </Collapsible>
//   </div>
// );
// export default SignInButton;

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <h1>Sign In</h1>
        <Row>
          <Input s={3} label="First Name" validate>
            <Icon>account_circle</Icon>
          </Input>
        </Row>
        <Row>
          <Input s={3} label="Telephone" validate type="tel">
            <Icon>phone</Icon>
          </Input>
        </Row>
      </div>
    );
  }
}

export default SignIn;

