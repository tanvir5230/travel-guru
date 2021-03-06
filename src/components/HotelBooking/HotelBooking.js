import React, { useContext } from "react";
import { Col, Container, Row } from "reactstrap";
import { data } from "../../resources/data";
import MyNavbar from "../navbar/Navbar";
import star from "../../resources/Icon/star_1_.png";
import MyMap from "../Map/Map";
import { useLocation } from "react-router-dom";

const HotelBooking = () => {
  const location = useLocation();
  const placePath = location.pathname.split("/").pop();
  const destinationPlaceDetails = data.find(
    (place) => place.name.toLocaleLowerCase() === placePath.toLocaleLowerCase()
  );

  const hotels = destinationPlaceDetails["hotels"];
  const HotelInfo = () => {
    return hotels.map((hotel) => {
      return (
        <>
          <Col sm="12" md="6" className="mt-3">
            <img src={hotel.picture} alt="" className="img-fluid" />
          </Col>
          <Col sm="12" md="6" className="mt-3">
            <h3>{hotel.name}</h3>
            <p className="text-justify">{hotel.about.slice(0, 100)}...</p>
            <p>
              <img src={star} alt="" width="20" height="20" />
              <span>{hotel.rating}</span>
            </p>
          </Col>
        </>
      );
    });
  };
  return (
    <Container>
      <Row>
        <MyNavbar />
      </Row>
      <hr />
      <Row className="justify-content-center justify-content-md-start">
        <h1>Stay in {placePath}</h1>
      </Row>
      <Row className="justify-content-center">
        <Col sm="10" md="6">
          <Row>{HotelInfo()}</Row>
        </Col>
        <Col sm="10" md="6" className="" style={{ height: "100vh" }}>
          <div>
            <MyMap hotels={hotels} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelBooking;
