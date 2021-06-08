import React from 'react'
import toprating1 from "./assets/toprating1.jpg"
import toprating2 from "./assets/toprating2.jpg"
import toprating3 from "./assets/toprating3.jpg"
import toprating4 from "./assets/toprating4.jpg"
import { Container, Row, Card, Col } from "react-bootstrap"


export default function Hero() {
  return (
    <Container fluid>
      <h2 style={{ textAlign: "center", marginBottom: "20px", background: "#1bdddd", padding: "20px 0", fontWeight: "400" }}>Top Rating Products</h2>
      <Row>
        {/* card 1 */}
        <Col md xs={6} style={{ marginBottom: "20px" }} >
          <Card style={{ maxWidth: '15rem', margin: "auto", }} >
            <Card.Img variant="top" src={toprating1} style={{ height: "190px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Nike Gold</Card.Title>
              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>  5.0</span>
              </div>

              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
              <h4 style={{ fontWeight: "400" }}>P1,500</h4>
            </Card.Body>
          </Card>
        </Col>
        {/* card 2 */}
        <Col md xs={6} style={{ marginBottom: "20px" }}>
          <Card style={{ maxWidth: '15rem', margin: "auto" }} >
            <Card.Img variant="top" src={toprating2} style={{ height: "190px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Nike Gold 2.0</Card.Title>
              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>  5.0</span>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
              <h4 style={{ fontWeight: "400" }}>P1,500</h4>
            </Card.Body>
          </Card>
        </Col>
        {/* card  */}
        <Col md xs={6} style={{ marginBottom: "20px" }}>
          <Card style={{ maxWidth: '15rem', margin: "auto" }} >
            <Card.Img variant="top" src={toprating3} style={{ height: "190px", width: "100%", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Nike Gray </Card.Title>
              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>  5.0</span>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
              <h4 style={{ fontWeight: "400" }}>P1,500</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md xs={6} style={{ marginBottom: "20px" }} >
          <Card style={{ maxWidth: '15rem', margin: "auto" }} >
            <Card.Img variant="top" src={toprating4} style={{ height: "190px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Nike Red</Card.Title>

              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>  5.0</span>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
              <h4 style={{ fontWeight: "400" }}>P1,500</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >

  )
}
