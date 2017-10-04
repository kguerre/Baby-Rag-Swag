import React from "react";
import { Button, Form, Message, Grid, Segment, Header } from "semantic-ui-react";
import "./SignUpForm.css";

const FormExampleSuccess = () => (
  <div className="sign-up=form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          Create an Account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input label="First Name" placeholder="Bob" />
            <Form.Input label="Last Name" placeholder="Smith" />
            <Form.Input label="Email" placeholder="joe@schmoe.com" />
            <Form.Input label="Password" placeholder="password" />
            <Button>Submit</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default FormExampleSuccess;
