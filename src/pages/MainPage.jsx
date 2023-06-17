import {
  Stack,
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import React, { useState } from "react";
import "/src/style/MainPage.css";
import "/src/assets/fonts.css";
import SubscribedDesktop from "./SubscribedDesktop";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    navigate("/subscribed");
  };
  if (isSubmitted) {
    return <SubscribedDesktop email={email} />;
  }
  return (
    <>
      <Container id="main">
        <Row>
          <Col sm={12} md={6} id="left-section">
            <Image
              className="mobile-img"
              src="/src/assets/images/illustration-sign-up-mobile.svg"
              alt="mobile"
            />

            <div id="left-section">
              <h1>Stay updated!</h1>
              <p>Join 60,000 poduct managers receiving monthly updates on:</p>
              <ul>
                <li>
                  <img
                    className="lst-img"
                    src="src/assets/images/icon-list.svg"
                  />
                  Product discovery and building what matters
                </li>
                <li>
                  {" "}
                  <img
                    className="lst-img"
                    src="src/assets/images/icon-list.svg"
                  />
                  Measuring to ensure updates are a success
                </li>
                <li>
                  <img
                    className="lst-img"
                    src="src/assets/images/icon-list.svg"
                  />
                  And much more!
                </li>
              </ul>
              <div id="form-group">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      required
                      size="lg"
                      type="email"
                      placeholder="email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Button size="lg" id="btn" type="submit">
                    Subscribe to monthly newsletter
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} id="right-section">
            <div id="right-section">
              <Image
                className="desktop-img"
                src="src/assets/images/illustration-sign-up-desktop.svg"
                alt="background-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
