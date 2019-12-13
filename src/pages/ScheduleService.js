import React, { useState } from "react";
import { Badge } from "reactstrap";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function ScheduleService() {
  // Create Order
  let history = useHistory()
  const createOrder = async props => {
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/schedule-service`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ order })
    });
    const data = await resp.json();

    if (data.success) {
      history.push("/dashboard");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createOrder();
  };

  const [order, setOrder] = useState({});
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(0);

  // Address Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Date and Time
  const getTime = () => {
    switch (time) {
      case 0:
        return (
          <div style={{ textAlign: "left", fontSize: "14px" }}>no time</div>
        );
      case 1:
        return (
          <div style={{ textAlign: "left", fontSize: "14px" }}>
            <Container>
              <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
              </Row>
            </Container>
          </div>
        );
      case 2:
        return (
          <div style={{ textAlign: "left", fontSize: "14px" }}>time 3</div>
        );
      case 3:
        return (
          <div style={{ textAlign: "left", fontSize: "14px" }}>
            Sorry, no available slots for the selected date please try with
            future dates.
          </div>
        );
      case 4:
        return (
          <div style={{ textAlign: "left", fontSize: "14px" }}>time 5</div>
        );
      default:
        break;
    }
  };

  //Main Form ([Service, Date, Address], result)
  const getForm = props => {
    switch (step) {
      case 1:
        return (
          <div className="schedule_servicetype">
            <h1 style={{ textAlign: "left" }}>Choose the services</h1>
            <div class="row" id="schedule_row">
              <div class="" tabindex="1">
                <label className="serv_was_box" for="serv1" id="step1_box">
                  <div className="btn-container" onClick={() => setOrder({
                      ...order, servicetype: "Wash & Fold"})}>
                    <div class="image">
                      <input name="servicetype" style={{display:"none"}}></input>
                      <img
                        className="step1_icon"
                        src="https://cdn0.iconfinder.com/data/icons/laundry-19/512/fold-512.png"
                        alt=""
                      />
                    </div>
                    <div class="text" id="sertype1">
                      Wash &amp; Fold
                    </div>
                  </div>
                </label>
              </div>
              <div class="" tabindex="1">
                <label className="serv_was_box" for="serv1">
                  <div class="btn-container" onClick={() => setOrder({
                      ...order, servicetype: "Wash & Iron"})}>
                    <div class="image">
                     <input name="servicetype" style={{display:"none"}}></input>
                      <img
                        className="step1_icon"
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </div>
                    <div class="text" id="sertype2">
                      Wash &amp; Iron
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="row" id="schedule_row">
              <div class="" tabindex="1">
                <label className="serv_was_box" for="serv1" id="serv_box3">
                  <div class="btn-container" onClick={() => setOrder({
                      ...order, servicetype: "Wash Iron & Special"})}>
                    <div class="image">
                      <input name="servicetype" style={{display:"none"}}></input>
                      <img
                        className="step1_icon"
                        src="https://cdn4.iconfinder.com/data/icons/materia-holiday/24/029_051_catch_star_give_present_light_jewel-512.png"
                        alt=""
                      />
                    </div>
                    <div class="text" id="sertype3">
                      Wash Iron &amp; Special
                    </div>
                  </div>
                </label>
              </div>
              <div class="" onclick="NextBtn()" tabindex="1">
                <label className="serv_was_box" for="serv1" id="serv_box4">
                  <div class="btn-container" onClick={() => setOrder({
                      ...order, servicetype: "Dry Cleaning"})}>
                    <div class="image">
                      <input name="servicetype" style={{display:"none"}}></input>
                      <img
                        className="step1_icon"
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </div>
                    <div class="text" id="sertype4">
                      Dry Cleaning
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="schedule_button">
              <button id="previous_button" className="disabled" disabled>
                Previous
              </button>

              {order.servicetype != null ? (
                <button onClick={() => setStep(2)}>Next</button>
              ) : (
                <button
                  style={{ cursor: "not-allowed" }}
                  id="previous_button"
                  disabled
                >
                  Next
                </button>
              )}

              {/* <button id="service_next_button" onClick={() => {if (order.servicetype != null) setStep(2)}}>Next</button> */}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="schedule_date schedule_servicetype">
            <h1 style={{ textAlign: "left" }}>Choose the services</h1>
            <div className="fleft fwidth date_main">
              <div
                className="col-md-1 col-sm-2 col-xs-4 schedule_col"
                onclick="CheckSlot('2019-12-11');"
                tabindex="1"
              >
                <input
                  className="radio_btn first_date"
                  type="radio"
                  checked=""
                  name="dateandtime"
                  value=""
                  id="serv1"
                  onChange={e =>
                    setOrder({
                      ...order,
                      dateandtime: document.getElementById("date1").textContent
                    })
                  }
                  onClick={() => setTime(1)}
                />
                <label className="date-container" for="serv1" id="date1">
                  <div className="day"> Today </div>
                  <div className="date">Dec 16, 2019</div>
                </label>
              </div>
              <div
                className="col-md-1 col-sm-2 col-xs-4 schedule_col"
                onclick="CheckSlot('2019-12-12');"
                tabindex="1"
              >
                <input
                  className="radio_btn"
                  type="radio"
                  name="dateandtime"
                  value=""
                  id="serv2"
                  onChange={e =>
                    setOrder({
                      ...order,
                      dateandtime: document.getElementById("date2").textContent
                    })
                  }
                  onClick={() => setTime(2)}
                />
                <label className="date-container" for="serv2" id="date2">
                  <div className="day"> Tomorrow </div>
                  <div className="date"> Dec 17, 2019</div>
                </label>
              </div>
              <div
                className="col-md-1 col-sm-2 col-xs-4 schedule_col"
                onclick="CheckSlot('2019-12-13');"
                tabindex="1"
              >
                <input
                  className="radio_btn"
                  type="radio"
                  name="dateandtime"
                  value=""
                  id="serv3"
                  onChange={e =>
                    setOrder({
                      ...order,
                      dateandtime: document.getElementById("date3").textContent
                    })
                  }
                  onClick={() => setTime(3)}
                />
                <label className="date-container" for="serv3" id="date3">
                  <div className="day">Wednesday </div>
                  <div className="date">Dec 18, 2019</div>
                </label>
              </div>
              <div
                className="col-md-1 col-sm-2 col-xs-4 schedule_col"
                onclick="CheckSlot('2019-12-14');"
                tabindex="1"
              >
                <input
                  className="radio_btn"
                  type="radio"
                  name="dateandtime"
                  value=""
                  id="serv4"
                  onChange={e =>
                    setOrder({
                      ...order,
                      dateandtime: document.getElementById("date4").textContent
                    })
                  }
                  onClick={() => setTime(4)}
                />
                <label className="date-container" for="serv4" id="date4">
                  <div className="day">Thursday </div>
                  <div className="date">Dec 19, 2019</div>
                </label>
              </div>
              <div
                className="col-md-1 col-sm-2 col-xs-4 schedule_col"
                onclick="CheckSlot('2019-12-15');"
                tabindex="1"
              >
                <input
                  className="radio_btn"
                  type="radio"
                  name="dateandtime"
                  value=""
                  id="serv5"
                  onChange={e =>
                    setOrder({
                      ...order,
                      dateandtime: document.getElementById("date5").textContent
                    })
                  }
                  onClick={() => setTime(5)}
                />
                <label className="date-container" for="serv5" id="date5">
                  <div className="day">Friday </div>
                  <div className="date">Dec 20, 2019</div>
                </label>
              </div>
            </div>

            <div className="schedule_time">
              <h3 style={{ textAlign: "left" }}>Select the pickup time</h3>
              <div>{getTime()}</div>
            </div>

            <div className="schedule_button">
              <button id="previous_button" onClick={() => setStep(1)}>
                Previous
              </button>
              {order.dateandtime != null ? (
                <button onClick={() => setStep(3)}>Next</button>
              ) : (
                <button
                  style={{ cursor: "not-allowed" }}
                  id="previous_button"
                  disabled
                >
                  Next
                </button>
              )}
              {/* <button
                onClick={() => {
                  if (order.dateandtime != null) setStep(3);
                }}
              >
                Next
              </button> */}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="schedule_address">
            <div className="schedule_address_detail">
              <h1>Address Information ( Select or Add address )</h1>
            </div>
            <div className="fleft fwidth addre_main">
              <div className="col-md-5 col-sm-6 col-xs-12">
                <input
                  className="radio_btn"
                  type="radio"
                  name="address"
                  value="1203"
                  id="adss1"
                  onChange={e =>
                    setOrder({
                      ...order,
                      address: document.getElementById("add1").textContent
                    })
                  }
                />
                <label className="addre_box" for="adss1">
                  <div className="addre_head">
                    <h3>Home</h3>
                    <button
                      type="button"
                      onclick="EditAddr(1203)"
                      data-toggle="modal"
                      data-target="#edit_addr"
                    >
                      <img src="images/edit.png" title="" width="16" alt="" />
                    </button>
                  </div>
                  <hr></hr>
                  <div className="addre_con" id="add1">
                    <a href="#">
                      <Button onClick={handleShow}>+ Add a new address</Button>
                    </a>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton className="address-modalheader">
                        <Modal.Title>Add Address</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Address Type
                        <div className="address_type">
                          <Container>
                            <Row className="show-grid">
                              <Col xs={2} md={2}>
                                <input
                                  class="radio_btn"
                                  type="radio"
                                  name="a_type"
                                  value="Home"
                                  id="hwo1"
                                />
                                <label class="ap_hw" for="hwo1">
                                  Home{" "}
                                </label>
                              </Col>
                              <Col xs={2} md={2}>
                                <input
                                  class="radio_btn"
                                  type="radio"
                                  name="a_type"
                                  value="Home"
                                  id="hwo1"
                                />
                                <label class="ap_hw" for="hwo1">
                                  Work{" "}
                                </label>
                              </Col>
                              <Col xs={2} md={2}>
                                <input
                                  class="radio_btn"
                                  type="radio"
                                  name="a_type"
                                  value="Home"
                                  id="hwo1"
                                />
                                <label class="ap_hw" for="hwo1">
                                  Other{" "}
                                </label>
                              </Col>
                            </Row>
                          </Container>
                          <div
                            class="address-form-group"
                            style={{ paddingTop: "1rem" }}
                          >
                            <label for="">Street No :</label>
                            <input
                              type="text"
                              class="form-control"
                              name="address"
                              id=""
                              onChange={e =>
                                setOrder({ ...order, address: e.target.value })
                              }
                            />
                          </div>
                          <div class="address-form-group">
                            <label for="">Flat/House No :</label>
                            <input
                              type="text"
                              class="form-control"
                              name="address"
                              id=""
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="address-modal-footer">
                        <Button variant="primary" onClick={handleClose}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </label>
              </div>
              <div
                className="col-md-5 col-sm-6 col-xs-12"
                data-toggle="modal"
                data-target="#add_addr"
              >
                <div className="addre_box new">
                  <button type="button">+ Add a new address</button>
                </div>
              </div>
            </div>
            <div className="schedule_button">
              {/* <input onChange={(e) => setOrder({ ...order, typeofservice: e.target.value})} /> */}
              <button id="previous_button" onClick={() => setStep(2)}>
                Previous
              </button>
              {order.address != null ? (
                <button onClick={() => setStep(4)}>Next</button>
              ) : (
                <button
                  id="previous_button"
                  style={{ cursor: "not-allowed" }}
                  disabled
                >
                  Next
                </button>
              )}
              {/* <button onClick={() => {if (order.address != null) setStep(4)}}>Next</button> */}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="schedule_result">
            <h1>Review & Schedule</h1>

            <div className="service_result">
              <div>
                <h3>Service Details</h3>
              </div>
              <div className="schedule_service_detail">{order.servicetype}</div>
            </div>

            <div className="date_result">
              <div>
                <h3>Date & Time</h3>
              </div>

              <div className="schedule_date_detail">
                <div className="date_detail_pickupdate">
                  Pickup Date
                  <p>{order.dateandtime}</p>
                </div>

                <div className="date_detail_pickuptime">
                  Pickup Time
                  <p></p>
                </div>
              </div>
            </div>

            <div className="address_result">
              <h3>Address</h3>
              <p>{order.address}</p>
            </div>

            <div className="schedule_button">
              <button id="previous_button" onClick={() => setStep(3)}>
                Previous
              </button>
              <button type="submit" onClick={e => handleSubmit(e)}>
                Schedule Pickup
              </button>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  console.log({ order });
  return (
    <>
      <div className="ordering-process">
        {/* <div style={{ padding: 50, height: 500, width: 500, backgroundColor: getColor(), border: '1px solid red'}}>
                    {getForm()}
                </div> */}
        <div style={{ paddingLeft: 60, paddingTop: 50, paddingBottom: 50 }}>
          <Badge
            color="black"
            style={{
              backgroundColor: step === 1 ? "#83e5de" : "rgba(232, 232, 232, 1)"
            }}
            className="schedule_badge"
          >
            {/* <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_569724046.jpg"></img> */}
            Service detail<br></br>
            <small>Select your type of service</small>
          </Badge>
        </div>
        <div style={{ paddingLeft: 50, paddingTop: 50 }}>
          <Badge
            color="black"
            style={{
              backgroundColor: step === 2 ? "#83e5de" : "rgba(232, 232, 232, 1)"
            }}
            className="schedule_badge"
          >
            Date and Time<br></br>
            <small>Select service date and time</small>
          </Badge>
        </div>
        <div style={{ paddingLeft: 50, paddingTop: 50 }}>
          <Badge
            color="black"
            style={{
              backgroundColor: step === 3 ? "#83e5de" : "rgba(232, 232, 232, 1)"
            }}
            className="schedule_badge"
          >
            Address<br></br>
            <small>Select service address</small>
          </Badge>
        </div>
        <div style={{ paddingLeft: 50, paddingTop: 50 }}>
          <Badge
            color="black"
            style={{
              backgroundColor: step === 4 ? "#83e5de" : "rgba(232, 232, 232, 1)"
            }}
            className="schedule_badge"
          >
            Review and Schedule<br></br>
            <small>Review your order and schedule</small>
          </Badge>
        </div>
      </div>
      <div>{getForm()}</div>
    </>
  );
}
