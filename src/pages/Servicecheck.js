import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Navibar from "../components/Nav";
import { Alert } from "reactstrap";
import { Tooltip } from "reactstrap";
import Footer from "../components/Footer";

export default function Servicecheck(props) {
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

  // First Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Second Modal
  const [result, setResult] = useState(false);
  const resultClose = () => setResult(false);

  // ############
  const [input, setInput] = useState("");
  const handleOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const postCheckService = async () => {
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/servicecheck`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input })
    });
    const data = await resp.json();
    console.log("data", data);

    // If the address is Invalid, pop up a Modal
    if (data.success) {
      if (props.currentUser) props.history.push("/schedule-service");
    props.history.push("/register");
    }

    if (data.false) setShow(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    postCheckService();
  };

  function gotoLogin() {
    props.history.push("/login");
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  // Alert - Infomation on Service check
  // const [appear, setAppear] = useState(true);
  // const onDismiss = () => setAppear(false);
  // isOpen={appear} toggle={onDismiss}
  return (
    <div>
      <div className="service_check">
        <div id="circle">
          <i className="fas fa-sign-in-alt"></i>
        </div>
        <h1>Get Started</h1>
        <Tooltip
          placement="right"
          isOpen={tooltipOpen}
          target="TooltipExample"
          toggle={toggle}
        >
          Currently, we only provide laundry service in certain area in HCMC. If
          your location is in range, you can register new account afterward.
        </Tooltip>
        <p className="zipcode_title">City:</p>
        <span id="form-control-login">
          Ho Chi Minh City&nbsp;{" "}
          <a href="#" id="TooltipExample">
            <i class="fas fa-question-circle"></i>
          </a>
        </span>
        <br></br>
        <Form onChange={e => handleOnChange(e)} onSubmit={e => handleSubmit(e)}>
          <Form.Group>
            <Form.Label className="zipcode_title">
              Select your District:
            </Form.Label>
            <Form.Control
              as="select"
              name="district"
              id="form-control-login"
              required
            >
              <option
                selected="selected"
                value="-1"
                disabled="disabled"
                id="choose-your-district"
              >
                Choose your District
              </option>
              <option value="District 1" name="district">
                District 1
              </option>
              <option value="District 2" name="district">
                District 2
              </option>
              <option value="District 3" name="district">
                District 3
              </option>
              <option value="District 4" name="district">
                District 4
              </option>
              <option value="District 5" name="district">
                District 5
              </option>
              <option value="District 6" name="district">
                District 6
              </option>
              <option value="District 7" name="district">
                District 7
              </option>
              <option value="District 8" name="district">
                District 8
              </option>
              <option value="District 9" name="district">
                District 9
              </option>
              <option value="District 10" name="district">
                District 10
              </option>
              <option value="District 11" name="district">
                District 11
              </option>
              <option value="District 12" name="district">
                District 12
              </option>
              <option value="Binh Tan Distric" name="district">
                Binh Tan District{" "}
              </option>
              <option value="Binh Thanh District" name="district">
                Binh Thanh District
              </option>
              <option value="Go Vap District" name="district">
                Go Vap District
              </option>
              <option value="Phu Nhuan District" name="district">
                Phu Nhuan District
              </option>
              <option value="Tan Binh District" name="district">
                Tan Binh District
              </option>
              <option value="Tan Phu District" name="district">
                Tan Phu District
              </option>
              <option value="Thu Duc District" name="district">
                Thu Duc District
              </option>
              <option value="Binh Chanh District" name="district">
                Binh Chanh District
              </option>
              <option value="Can Gio District" name="district">
                Can Gio District
              </option>
              <option value="Cu Chi District" name="district">
                Cu Chi District
              </option>
              <option value="Hoc Mon District" name="district">
                Hoc Mon District
              </option>
              <option value="Nha Be District" name="district">
                Nha Be District
              </option>
            </Form.Control>
            {/* <Form.Control type="text" name="district" id="form-control-login" /> */}
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit" id="service_check_button">
            LET'S GO!
          </Button>
        </Form>
        <div className="Modal">
          <Modal show={show} className="main-modal" onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                Oops! Laundryover isn’t available in your area... yet.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-content">
              <div className="modal-subtitle">
                Sign up below and you’ll be the first to know when we’ve reached
                your neighborhood.
              </div>
              <Form className="modal-form-service">
                <Form.Group>
                  <Form.Label id="modal-label-service">FULL NAME</Form.Label>
                  <Form.Control
                    id="service-modal-input"
                    type="text"
                    placeholder="Type your name"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label id="modal-label-service">EMAIL*</Form.Label>
                  <Form.Control
                    id="service-modal-input"
                    type="email"
                    placeholder="Type your email"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label id="modal-label-service">ADDRESS*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Example: 12 Ton Dan Street, District 4, HCMC"
                    id="service-modal-input"
                    required
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="modal-footer-service">
              <Button
                type="submit"
                variant="primary"
                onClick={() => {
                  setShow(false);
                  setResult(true);
                }}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="Modal-result">
          <Modal show={result} className="main-modal" onHide={resultClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                Oops! Laundryover isn’t available in your area... yet.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-content">
              <div className="modal-subtitle">
                Sign up below and you’ll be the first to know when we’ve reached
                your neighborhood.<br></br>
              </div>
              <div className="modal-thanks">
                <b>Thanks, we'll keep you posted!</b>
              </div>
            </Modal.Body>
            <Modal.Footer className="modal-footer-service"></Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="signup_login">
        <p>Already have an account?</p>
        <a href="" onClick={() => gotoLogin()}>
          Sign in
        </a>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
