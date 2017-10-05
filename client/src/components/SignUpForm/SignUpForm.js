import React, {Component} from "react";
import { Button, Form, Message, Grid, Segment, Header } from "semantic-ui-react";
import "./SignUpForm.css";

class FormExampleSuccess extends Component  {

  state = {
    name:"",
    email:"",
    password:""
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // this.props.setLogin(this.state.email, this.state.password);
  console.log(this.state.name, this.state.email, this.state.password);
    // this.props.setPass(this.state.password);
    this.setState({name: "", email:"", password:""});

  };

  render(){
    return (


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
        <Form size="large" onSubmit= {this.handleSubmit}>
          <Segment stacked>
            <Form.Input label="First Name" placeholder="Bob" name= "name"
            value= {this.state.name}
            onChange= {this.handleChange} required />
            <Form.Input label="Email" placeholder="joe@schmoe.com" name= "email"
            value= {this.state.email}
            onChange= {this.handleChange} required/>
            <Form.Input label="Password" placeholder="password" name = "password"
            value= {this.state.password}
            onChange= {this.handleChange}  required/>
            <Button type= "submit">Submit</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)
}
};
export default FormExampleSuccess;
