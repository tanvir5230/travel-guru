import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import { FbBtn, GoogleBtn, OrLine } from "../login/Login";
import MyNavbar from "../navbar/Navbar";

const SignUp = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newUser = {
      ...user,
      [name]: value,
    };
    handleErrors(name, value);
    setUser(newUser);
  };

  const handleErrors = (name, value) => {
    const isInRange = (value) => {
      if (value.length > 10 || value.length < 3) {
        return false;
      } else {
        return true;
      }
    };
    const inRange = isInRange(value);
    const isMailValid = name === "email" ? /\S+@\S+.\S+/.test(value) : false;
    const isPassValid = (length) => {
      if (length >= 8) {
        return true;
      }
      return false;
    };
    const checkName = (value) => {
      if (inRange) {
        const newErrors = {
          ...errors,
          [name]: "",
        };
        setErrors(newErrors);
        return;
      } else {
        const newErrors = {
          ...errors,
          [name]: "at least 3 characters needed and not more than 10 allowed.",
        };
        setErrors(newErrors);
        return;
      }
    };

    switch (name) {
      case "firstname":
        checkName(user.name);
        break;

      case "lastname":
        checkName(user.name);
        break;

      case "email":
        if (!isMailValid) {
          const newErrors = {
            ...errors,
            [name]: "Your email must contain @ and . char.",
          };
          setErrors(newErrors);
        } else {
          const newErrors = {
            ...errors,
            [name]: "",
          };
          setErrors(newErrors);
        }
        break;

      case "password":
        const pwdValidate = isPassValid(value.length);
        console.log(pwdValidate);
        if (!pwdValidate) {
          const newErrors = {
            ...errors,
            [name]: "password should be of at least 8 characters.",
          };
          setErrors(newErrors);
        } else {
          const newErrors = {
            ...errors,
            [name]: "",
          };
          setErrors(newErrors);
        }
        break;

      case "confirmPassword":
        const didMatch = value === user.password ? true : false;
        if (!didMatch) {
          const newErrors = {
            ...errors,
            [name]: "you password didn't match.",
          };
          setErrors(newErrors);
          setPasswordMatch(false);
        } else {
          console.log(value, user.password, passwordMatch);
          setPasswordMatch(true);
        }
        break;
      default:
        break;
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (value.length > 0) {
      return;
    } else {
      if (name !== "confirmPassword") {
        const newTouchedStatus = {
          ...touched,
          [name]: true,
        };
        const newErrors = {
          ...errors,
          [name]: "This is a required field.",
        };
        setTouched(newTouchedStatus);
        setErrors(newErrors);
      }
    }
    event.preventDefault();
  };

  // useEffect(() => {
  //   console.log(user, errors, passwordMatch);
  // });

  return (
    <Container className="">
      <Row>
        <MyNavbar />
      </Row>
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
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="text-center text-danger py-2">{errors.firstname}</p>
            <input
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="lastname"
              className="form-control mt-4"
              required
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="text-center text-danger py-2">{errors.lastname}</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="form-control mt-3"
              required
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="text-center text-danger py-2">{errors.email}</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="form-control mt-3"
              required
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="text-center text-danger py-2">{errors.password}</p>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirm password"
              className="form-control mt-3"
              required
              disabled={!(user.password.length >= 8)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="text-center text-success py-2">
              {passwordMatch ? (
                "your password matched."
              ) : (
                <span className="text-danger">{errors.confirmPassword}</span>
              )}
            </p>
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
        <OrLine />
        <Col sm="12" md="8" lg="6" className="my-4">
          <FbBtn />
          <GoogleBtn />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
