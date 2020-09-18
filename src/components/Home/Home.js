import React from "react";
import { Container, Row } from "reactstrap";
import MyNavbar from "../navbar/Navbar";
import PlacesSlider from "../Slider/PlacesSlider";

const Home = () => {
  return (
    <div className="bg-overlay">
      <Container>
        <Row>
          <MyNavbar />
        </Row>
        <Row>
          <PlacesSlider />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
