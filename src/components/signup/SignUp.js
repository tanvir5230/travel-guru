import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";

const SignUp = () => {
  return (
    <Container className="">
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={8} lg={6} className="">
          <Form className="p-4 mt-4 shadow">
            <h3 className="font-weight-bold mb-4">Create an account</h3>
            <input
              type="firstname"
              name="firstname"
              id="firstname"
              placeholder="firstname"
              className="form-control mt-4"
              required
            />
            <input
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="lastname"
              className="form-control mt-4"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="form-control mt-4"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="form-control mt-4"
              required
            />
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="confirm password"
              className="form-control mt-4"
              required
            />

            <div>
              <input
                type="submit"
                value="create an account"
                className="btn w-100 rounded-0 btn-warning mt-4 py-2 font-weight-bold"
              />
            </div>

            <div>
              <p className="text-center mt-4">
                <span className="mr-2">already have an account?</span>
                <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mt-4">
        <Col
          sm="12"
          md="8"
          lg="7"
          className="d-flex justify-content-center align-items-center"
          style={{ padding: "0 10%" }}
        >
          <Col>
            <hr />
          </Col>
          <span>Or</span>
          <Col>
            <hr />
          </Col>
        </Col>
        <Col sm="12" md="8" lg="7" className="mt-4">
          <button className="btn text-dark btn-outline-light  w-75 border rounded-pill d-block m-auto shadow-sm">
            <img
              src={require("../../resources/Icon/fb.png")}
              alt="fb"
              width="37"
              height="37"
            />
            <span className="ml-5">Continue With Facebook</span>
          </button>
          <button
            className="btn text-dark btn-outline-light w-75 border rounded-pill d-block shadow-sm"
            style={{ margin: "15px auto" }}
          >
            <img
              src={require("../../resources/Icon/google.png")}
              alt="fb"
              width="37"
              height="37"
              className="mr-3"
            />
            <span className="ml-5">Continue With Google</span>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
