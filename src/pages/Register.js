import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navibar from "../components/Nav";
import { Alert } from "reactstrap";

export default function Register(props) {
  const [input, setInput] = useState({});
  const handleOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const postUser = async () => {
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input })
    });
    const data = await resp.json();
    if (data.false === 'false') setVisible(true);
    if (data.false === 'existed mobile') setMobile(true)
    if (data.email) {
      props.setCurrentUser(data);
      localStorage.setItem("token", data.token);
      props.history.push("/schedule-service");
    }
    // console.log("data", data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    postUser();
  };

  function gotoLogin() {
    props.history.push("/login");
  }

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  const [mobile, setMobile] = useState(false);
  const onMobile = () => setVisible(false);

  return (
    <div>
      <img
        src="https://i.ibb.co/JspWmTc/Logo.png"
        alt="Logo"
        border="0"
        width="200px"
        id="logo_login"
        className="logo_form_register"
      />
      <div className="Form_Login register_form_register">
        <Alert
          color="warning"
          isOpen={visible}
          toggle={onDismiss}
          className="alert_link"
        >
          Your account is already existed ! You can Sign in{" "}
          <a href="" onClick={() => gotoLogin()}>
            here
          </a>
        </Alert>
        <Alert
          color="warning"
          isOpen={mobile}
          toggle={onMobile}
          className="alert_link"
        >
          The Mobile number that you've entered is existed !{" "}
        </Alert>
        {/* <h1>Sign In</h1> */}
        <Form onChange={e => handleOnChange(e)} onSubmit={e => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              id="form-control-login"
              className="form-control-register"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter mobile number"
              name="mobile"
              id="form-control-login"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              id="form-control-login"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              id="form-control-login"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit" id="button_login">
            Register
          </Button>
        </Form>
        <div className="signup_login signup_login_register">
          <p>Already have an account?</p>
          <a href="" onClick={() => gotoLogin()}>
            Sign in here
          </a>
        </div>
      </div>
    </div>
  );
}
