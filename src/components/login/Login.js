import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import MyNavbar from "../navbar/Navbar";
import SignUp from "../signup/SignUp";

const Login = () => {
  return (
    <Container className="">
      <Row>
        <MyNavbar />
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={8} lg={6} className="">
          <Form className="p-4 mt-5 shadow">
            <h3 className="font-weight-bold mb-4">Login</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="username or email"
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
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="pt-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <div>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Login"
                className="btn w-100 rounded-0 btn-warning mt-4"
              />
            </div>
            <div>
              <p className="text-center mt-4">
                <span className="mr-2">already have an account?</span>
                <Link to="/signup">SignUp</Link>
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

export default Login;
