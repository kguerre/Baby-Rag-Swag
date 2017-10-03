import React, { Component } from "react";
import { Modal, Button, Row, Input, Icon } from "react-materialize";
// import { Link } from "react-router-dom";

// const SignUp = () => (
//   <Modal
//     header="Thanks for Joining!"
//     fixedFooter
//     trigger={<Button>Sign Up</Button>}
//   >
//     <Row>
//       <Input s={6} label="First Name" />
//       <Input s={6} label="Last Name" />
//       <Input type="email" label="Email" s={12} />
//       <Input type="password" label="password" s={12} />
//     </Row>
//   </Modal>
// );
// export default SignUp;

class SignUp extends Component {
  render() {
    return <div className="sign-up">
        <h1>Sign Up</h1>
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
  }
}

export default SignUp;

