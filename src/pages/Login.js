import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Navibar from "../components/Nav";
import { Alert } from "reactstrap";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   Set up Log in, Send to Flask
  const [input, setInput] = useState({});
  const handleOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const postUser = async () => {
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input })
    });
    const data = await resp.json();

    if (data.false === "wrong pass") setVisible(true);
    if (data.false === "not email") setAlert(true);
    if (data.email) {
      console.log("sksksk");
      props.setCurrentUser(data);
      localStorage.setItem("token", data.token);
      props.history.push("/");
    }
    // if (props.currentUser) history.goBack();
  };

  const handleSubmit = e => {
    e.preventDefault();
    postUser();
  };
  function gotoServiceCheck() {
    props.history.push("/servicecheck");
  }
  if (props.currentUser) props.history.push("/");
  // Alert - Wrong password
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  // Alert - Account not existed
  const [alert, setAlert] = useState(false);
  const onClose = () => setAlert(false);

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
          isOpen={alert}
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
          {/* <br></br>
          <a href="#" onClick={handleShow}>
            Forgot Password?
          </a> */}
        </div>
      </div>
      {/* <div className="forgot-password">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="header_forgot">
            <Modal.Title>Forgot Your Password?</Modal.Title>
            <Modal.Title>We will email you to reset your password.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                <div class="input-container-forgot">
                  <label><i class="far fa-envelope"></i></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </form>
              <p class="popup-fail-message">
              </p>
          </Modal.Body>
          <Modal.Footer className="button-forgot">
            <Button variant="primary" onClick={handleClose}>
              Send Instructions
            </Button>
          </Modal.Footer>
        </Modal>
      </div> */}
    </div>
  );
}
