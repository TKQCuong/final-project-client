import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navibar from "../components/Nav";
import { Alert } from "reactstrap";
import Footer from "../components/Footer";
import Home from "../pages/Home";

export default function Login(props) {
  // Change navbar CSS
  //   function changeBackground(color) {
  //     document.getElementById("navbar").style.backgroundColor = color;
  //   }
  //   window.addEventListener("click", function() {
  //     changeBackground("#f5f5f5");
  //   });

  //   function changePadding(padding) {
  //     document.getElementById("navbar").style.paddingBottom = padding;
  //   }
  //   window.addEventListener("click", function() {
  //     changePadding("10px");
  //   });

  //   Set up Log in, Send to Flask
  const [input, setInput] = useState({});
  const handleOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const postUser = async () => {
    const resp = await fetch("https://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input })
    });
    const data = await resp.json();

    if (data.false == "wrong pass") setVisible(true);
    if (data.false == "not email") setShow(true);
    if (data.email) {
      props.setCurrentUser(data);
      localStorage.setItem('token', data.token)
      props.history.push("/");
    }
    if (props.currentUser) 
      props.history.push("/");
  };

  const handleSubmit = e => {
    e.preventDefault();
    postUser();
  };
  function gotoServiceCheck() {
    props.history.push("/servicecheck");
  }

  // Alert - Wrong password
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  // Alert - Account not existed
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);

  return (
    <div>
      <img
        src="https://i.ibb.co/JspWmTc/Logo.png"
        alt="Logo"
        border="0"
        width="200px"
        id="logo_login"
      />
      <div className="Form_Login">
        <Alert
          color="danger"
          isOpen={visible}
          toggle={onDismiss}
          className="alert_link"
        >
          The password that you've entered is incorrect. &nbsp;&nbsp;
          <a href="" className="alert-link">
            Forgotten password?
          </a>
        </Alert>
        <Alert
          color="warning"
          isOpen={show}
          toggle={onClose}
          className="alert_link"
        >
          The account that you've entered is not existed. You can register{" "}
          <a href="" onClick={() => gotoServiceCheck()}>
            here
          </a>
        </Alert>
        {/* <h1>Sign In</h1> */}
        <Form onChange={e => handleOnChange(e)} onSubmit={e => handleSubmit(e)}>
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
            Sign In
          </Button>
        </Form>
        <div className="signup_login">
          <p>Don't have an account?</p>
          <a href="" onClick={() => gotoServiceCheck()}>
            Sign up here
          </a>
        </div>
      </div>
      {/* <div className="login_footer">
        <Footer {...props} />
      </div> */}
    </div>
  );
}
