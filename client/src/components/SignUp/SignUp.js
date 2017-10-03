import React from "react";
import { Modal, Button, Row, Input } from "react-materialize";
// import { Link } from "react-router-dom";

// export const SignUp = () => (

// );

const SignUp = () => (
  <Modal
    header="Thanks for Joining!"
    fixedFooter
    trigger={<Button>Sign Up</Button>}
  >
    <Row>
      <Input s={6} label="First Name" />
      <Input s={6} label="Last Name" />
      <Input type="email" label="Email" s={12} />
      <Input type="password" label="password" s={12} />
    </Row>
  </Modal>
);
export default SignUp;
