import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Howitwork() {
  return (
    <div className="howitwork" id="howitworks_scroll">
      <h1>how it works</h1>
      <div className="howitwork-card">
        <Container>
          <Row>
            <Col xs>
              <Card style={{ width: "14rem" }} className="single-card">
                <Card.Img
                  className="howitwork-image"
                  variant="top"
                  src="https://images.squarespace-cdn.com/content/v1/5bce6d340cf57dca18531f2f/1552275534877-OM3M2KMRXTSGI746CDFT/ke17ZwdGBToddI8pDm48kJuI8p5FQJ1Eq-llLbNfaL4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCca5qetNy8fW9VKAsZIuGiDiVgUjVhyhe0jAOzrfh8Y6LNbQCTpT_nm5zc2XNrT_/phone5-01.png?format=500w"
                />
                <Card.Body>
                  <Card.Title>PLACE ORDER</Card.Title>
                  <Card.Text>
                    Go to our laundry website and schedule your wash as per your
                    convenience. We will take it from there. Hassel free, fast
                    and simple!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 1 }}>
              <Card style={{ width: "14rem" }} className="single-card">
                <Card.Img
                  className="howitwork-image"
                  variant="top"
                  src="https://images.squarespace-cdn.com/content/v1/5bce6d340cf57dca18531f2f/1552275557435-2NXYSNFEF4XZRU67ZJP4/ke17ZwdGBToddI8pDm48kJuI8p5FQJ1Eq-llLbNfaL4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCca5qetNy8fW9VKAsZIuGiDiVgUjVhyhe0jAOzrfh8Y6LNbQCTpT_nm5zc2XNrT_/van5-01.png?format=500w"
                />
                <Card.Body>
                  <Card.Title>PICK UP</Card.Title>
                  <Card.Text>
                    We take your dirty clothes to be professionally cleaned.
                    Pick up is always on the house.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 1 }}>
              <Card style={{ width: "14rem" }} className="single-card">
                <Card.Img
                  className="howitwork-image"
                  variant="top"
                  src="https://images.squarespace-cdn.com/content/v1/5bce6d340cf57dca18531f2f/1552275570978-X04ZNXWL9X92A73M4XFC/ke17ZwdGBToddI8pDm48kJuI8p5FQJ1Eq-llLbNfaL4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCca5qetNy8fW9VKAsZIuGiDiVgUjVhyhe0jAOzrfh8Y6LNbQCTpT_nm5zc2XNrT_/shirt5-01.png?format=500w"
                />
                <Card.Body>
                  <Card.Title>FROM DIRTY TO CLEAN</Card.Title>
                  <Card.Text>
                    We take dirt very seriously. Our experts, with the help of
                    our state of art machinery ensure that your clothes come
                    back looking clean, tidier and fresh every time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 12 }}>
              <Card style={{ width: "14rem" }} className="single-card">
                <Card.Img
                  className="howitwork-image"
                  variant="top"
                  src="https://images.squarespace-cdn.com/content/v1/5bce6d340cf57dca18531f2f/1552275583994-6IF4BUAA3B2J6B9BNSFL/ke17ZwdGBToddI8pDm48kJuI8p5FQJ1Eq-llLbNfaL4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCca5qetNy8fW9VKAsZIuGiDiVgUjVhyhe0jAOzrfh8Y6LNbQCTpT_nm5zc2XNrT_/door5-01.png?format=500w"
                />
                <Card.Body>
                  <Card.Title>DELIVERY</Card.Title>
                  <Card.Text>
                    Your clothes will be delivered at your doorstep on time and
                    as fresh as daisy. Now getting your laundry done is that
                    convenient.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
