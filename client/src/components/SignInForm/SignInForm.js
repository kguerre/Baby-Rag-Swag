import React, {Component} from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import "./SignInForm.css";

class LoginForm extends Component {

    state = {
      email: "",
      password: ""
    };

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
};

handleSubmit = (event) => {
  event.preventDefault();

  // this.props.setLogin(this.state.email, this.state.password);
  console.log(this.state.email, this.state.password)
  // this.props.setPass(this.state.password);
  this.setState({email:"", password:""});

};
  render() {
    return(
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
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
         Log-in to your account
        </Header>
        <Form size="large" onSubmit= {this.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name = "email"
              value= {this.state.email}
              onChange= {this.handleChange}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name = "password"
              value= {this.state.password}
              onChange= {this.handleChange}
              required
            />

            <Button color="blue" fluid size="large" type="submit" >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
}
};
export default LoginForm;
