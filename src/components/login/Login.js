import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import { Store } from "../../App";
import MyNavbar from "../navbar/Navbar";

const Login = () => {
  const { loggedInUser, handleLogin } = useContext(Store);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "remember") {
      const newUser = {
        ...user,
        [name]: !user.remember,
      };
      setUser(newUser);
    } else {
      const newUser = {
        ...user,
        [name]: value,
      };
      setUser(newUser);
    }
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user.email, user.password);
  };
  if (loggedInUser) {
    history.replace(from);
  }
  return (
    <Container>
      <Row>
        <MyNavbar />
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col sm="10" md="8" lg="6">
          <Form className="p-4 mt-5 shadow">
            <h3 className="font-weight-bold mb-4">Login</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="username or email"
              className="form-control mt-4"
              required
              onBlur={handleBlur}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="form-control mt-4"
              required
              onBlur={handleBlur}
            />
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="pt-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  onBlur={handleBlur}
                />
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
                onClick={handleSubmit}
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
        <OrLine />
        <Col sm="12" md="8" lg="6" className="my-4">
          <FbBtn />
          <GoogleBtn />
        </Col>
      </Row>
    </Container>
  );
};

export const GoogleBtn = () => {
  const { handleSignUpWithGoogle } = useContext(Store);
  return (
    <button
      className="btn text-dark btn-outline-light border rounded-pill shadow-sm w-100"
      style={{ margin: "15px auto" }}
      onClick={handleSignUpWithGoogle}
    >
      <img
        src={require("../../resources/Icon/google.png")}
        alt="fb"
        width="37"
        height="37"
        className="mr-3"
      />
      <span className="">Continue With Google</span>
    </button>
  );
};
export const FbBtn = () => {
  const { handleSignUpWithFb } = useContext(Store);
  return (
    <button
      className="btn text-dark btn-outline-light border rounded-pill shadow-sm w-100"
      onClick={handleSignUpWithFb}
    >
      <img
        src={require("../../resources/Icon/fb.png")}
        alt="fb"
        width="37"
        height="37"
        className="ml-1"
      />
      <span>Continue With Facebook</span>
    </button>
  );
};
export const OrLine = () => {
  return (
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
  );
};

export default Login;
