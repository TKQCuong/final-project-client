/* eslint-disable default-case */
import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

export default function Service() {
  const [price, setPrice] = useState(1);

  function getPrice() {
    switch (price) {
      case 1:
        return (
          <div
            id="Wash_and_Fold"
            class="tab-pane fade fleft fwidth active in"
            style={{ opacity: "1" }}
          >
            <p>Wash &amp; Fold</p>
            <div class="table-responsive1">
              <table class="table1 table-bordered1">
                <thead>
                  <tr>
                    <th>Other</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "0px", border: "0px" }}>
                      <table>
                        <tbody>
                          <tr>
                            <td class="name_td">Weight</td>
                            <td>
                              <strong>$ 0.75/Kg</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 2:
        return (
          <div
            id="Wash_and_Fold"
            class="tab-pane fade fleft fwidth active in"
            style={{ opacity: "1" }}
          >
            <p>Wash &amp; Iron</p>
            <div class="table-responsive1">
              <table class="table1 table-bordered1">
                <thead>
                  <tr>
                    <th>Other</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "0px", border: "0px" }}>
                      <table>
                        <tbody>
                          <tr>
                            <td class="name_td">Weight</td>
                            <td>
                              <strong>$ 0.9/Kg</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 3:
        return (
          <div
            id="Wash_and_Fold"
            class="tab-pane fade fleft fwidth active in"
            style={{ opacity: "1" }}
          >
            <p>Wash Iron & Special</p>
            <div class="table-responsive1">
              <table class="table1 table-bordered1">
                <thead>
                  <tr>
                    <th>Other</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "0px", border: "0px" }}>
                      <table>
                        <tbody>
                          <tr>
                            <td class="name_td">Weight</td>
                            <td>
                              <strong>$ 1.05/Kg</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 4:
        return (
          <div
            id="Wash_and_Fold"
            class="tab-pane fade fleft fwidth active in"
            style={{ opacity: "1" }}
          >
            <p>Dry Cleaning</p>
            <div class="table-responsive1">
              <table class="table1 table-bordered1">
                <thead>
                  <tr>
                    <th>Other</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "0px", border: "0px" }}>
                      <table>
                        <tbody>
                          <tr>
                            <td class="name_td">Weight</td>
                            <td>
                              <strong>$ 1.25/Kg</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  }

  return (
    <>
      <div className="small_banner_schedule">
        <h1>SERVICE DETAILS</h1>
      </div>
      <div className="service_type_price">
        <Container>
          <Row>
            <Col onClick={() => setPrice(1)}>
              <Card style={{ width: "14rem" }}>
                <div className="img_service">
                  <Card.Img
                    variant="top"
                    src="https://www.travelfashiongirl.com/wp-content/uploads/2013/09/how-to-hand-wash-clothing-when-travelling-cover.jpg"
                  />
                  <span><i class="fas fa-plus" style={{color:'grey'}}></i></span>
                  <Card.Img
                    variant="top"
                    src="http://www.pliio.com/images/PLIIO_Shelves.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Wash & Fold</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col onClick={() => setPrice(2)}>
            <Card style={{ width: "14rem" }}>
                <div className="img_service">
                  <Card.Img
                    variant="top"
                    src="https://www.travelfashiongirl.com/wp-content/uploads/2013/09/how-to-hand-wash-clothing-when-travelling-cover.jpg"
                  />
                  <span><i class="fas fa-plus" style={{color:'grey'}}></i></span>
                  <Card.Img
                    variant="top"
                    src="https://www.thesocialiron.com/wp-content/uploads/2018/04/friendly-ironing-service.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Wash & Iron</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col onClick={() => setPrice(3)}>
            <Card style={{ width: "14rem" }}>
                <div className="img_service">
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/originals/03/b3/b0/03b3b0d59c869dd87158afb509929f91.png"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Wash Iron & Special</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col onClick={() => setPrice(4)}>
            <Card style={{ width: "14rem" }}>
                <div className="img_service">
                  <Card.Img
                    variant="top"
                    src="https://static.wixstatic.com/media/0cbe5f_7bc56fe5e49f4b518b94c2946f905236~mv2_d_2560_1440_s_2.jpg"
                  />
                  <span><i class="fas fa-plus" style={{color:'grey'}}></i></span>
                  <Card.Img
                    variant="top"
                    src="https://s3-ap-southeast-1.amazonaws.com/static.heramo.com/wp-content/uploads/Heramo.com-gi%E1%BA%B7t-qu%E1%BA%A7n-%C3%A1o-kh%C3%B4ng-b%E1%BB%8B-phai-m%C3%A0u-h%C3%ACnh-0.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Dry Cleaning</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>{getPrice()}</div>
    </>
  );
}
