import React from "react";
import { Col, Container, Row } from "reactstrap";
import MyNavbar from "../navbar/Navbar";

const NoRoute = () => {
  return (
    <Container>
      <Row>
        <MyNavbar />
      </Row>
      <hr />
      <Row
        className="text-capitalize font-weight-bolder text-danger text-center mt-5"
        style={{ height: "100vh" }}
      >
        <Col>
          <p>On processing</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NoRoute;
