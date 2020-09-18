import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { data } from "../../resources/data";
import MyNavbar from "../navbar/Navbar";

const BookingDetails = () => {
  const { id } = useParams();
  const place = data.find((item) => item.id === parseInt(id));

  const [bookingDetails, setBookingDetails] = useState({
    origin: "Dhaka",
    destination: place.name,
    dateFrom: "",
    dateTo: "",
  });
  const handleBlur = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newBooking = {
      ...bookingDetails,
      [name]: value,
    };
    setBookingDetails(newBooking);
  };
  const handleSubmit = (e) => {
    alert(JSON.stringify(bookingDetails));
    e.preventDefault();
  };
  return (
    <div className="bg-overlay">
      <Container>
        <Row>
          <MyNavbar />
        </Row>
        <Row className="mt-2 mt-lg-4">
          <Col sm="12" lg="7" className="py-5 text-white">
            <h1
              className="font-weight-bold pb-2 text-capitalize"
              style={{ fontSize: "3.5rem" }}
            >
              {place.name}
            </h1>
            <p style={{ lineHeight: "30px" }}>{place.description}</p>
          </Col>
          <Col className="m-auto py-5" sm="12" md="8" lg="5">
            <div className="booking-div bg-white rounded-lg">
              <Form className="p-4">
                <FormGroup>
                  <Label for="origin">Origin</Label>
                  <Input
                    className="form-group"
                    type="select"
                    name="origin"
                    onBlur={handleBlur}
                  >
                    <option>Dhaka</option>
                    <option>Cumilla</option>
                    <option>Sylhet</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="destination">Destination</Label>
                  <Input
                    type="text"
                    name="destination"
                    value={place.name}
                    readOnly
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col md="6" className="mb-3 mb-md-0">
                      <Label for="from">From</Label>
                      <Input
                        type="date"
                        id="from"
                        name="dateFrom"
                        onBlur={handleBlur}
                        required="required"
                      ></Input>
                    </Col>
                    <Col md="6">
                      <Label for="To">To</Label>
                      <Input
                        type="date"
                        id="to"
                        name="dateTo"
                        onBlur={handleBlur}
                        required="required"
                      ></Input>
                    </Col>
                  </Row>
                </FormGroup>
                <input
                  className="d-block w-100 mt-3 btn btn-warning"
                  type="submit"
                  value="Start Booking"
                  onClick={handleSubmit}
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingDetails;
