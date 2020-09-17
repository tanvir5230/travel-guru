import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const BookingDetails = () => {
  return (
    <Container>
      <Row>
        <Col sm="12" md="6">
          <h1>Cox's Bazar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem porro voluptatem in voluptates vitae odio sint quos
            id iure consectetur, aperiam error voluptatum officia neque
            consequatur delectus? Vitae omnis cum molestias, rem dolorum,
            obcaecati quod beatae ad voluptate quaerat ipsam.
          </p>
        </Col>
        <Col sm="12" md="6">
          <div className="booking-div">
            <Form>
              <FormGroup>
                <Label for="origin">Origin</Label>
                <Input className="form-group" type="select" name="select">
                  <option>Dhaka</option>
                  <option>Cumilla</option>
                  <option>Sylhet</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="destination">Destination</Label>
                <Input type="text" value="Cox's Bazar"></Input>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md="6" className="mb-3 mb-md-0">
                    <Label for="from">From</Label>
                    <Input type="date" id="from" name="from"></Input>
                  </Col>
                  <Col md="6">
                    <Label for="To">To</Label>
                    <Input type="date" id="to" name="to"></Input>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingDetails;
