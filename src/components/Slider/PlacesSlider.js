import { data } from "../../resources/data";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const items = data;

const PlacesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = (activeIndex) => {
    const id = activeIndex;
    const name = items[id].name;
    const description = items[id].description;
    const image = items[id].image;
    const itemsWithDiffId = items.filter((item) => item.id !== id);

    return (
      <>
        <Col sm="12" lg="6" className="text-white order-1 order-lg-0 mt-3">
          <h1 className="text-center">{name}</h1>
          <p className="text-justify">{description}</p>
          <Link to={`/places/${id}`}>
            <button className="btn btn-warning d-block m-auto">
              Booking &#8594;
            </button>
          </Link>
        </Col>

        <Col
          sm="12"
          lg="6"
          className="d-flex justify-content-center justify-content-lg-between overflow carousel-img order-0 order-lg-1"
        >
          <img
            src={require("../../" + image)}
            alt=""
            width="225"
            height="350"
            className="order-1 order-lg-0"
            style={{ border: "4px solid #ffb400", borderRadius: "20px" }}
          />
          {itemsWithDiffId.map((item) => {
            let imgId = item.id;
            if (imgId === 1 && id === 2) {
              imgId += 2;
            } else if (imgId === 1 && id === 0) {
              imgId = 0;
            }
            return (
              <img
                key={item.image}
                src={require("../../" + item.image)}
                alt=""
                width="200"
                height="300"
                className={`order-${imgId} order-lg-1 mt-4`}
                onClick={() => goToIndex(item.id)}
              />
            );
          })}
        </Col>
      </>
    );
  };

  return (
    <Container style={{ top: "20vh", height: "auto", zIndex: 10 }}>
      <Row className="overflow-hidden overflow-lg-visible mt-3 mt-lg-5">
        {slides(activeIndex)}
      </Row>
      <Row className="my-4">
        <Col xs="12">
          <div className="carousel-control m-auto d-block">
            <button onClick={previous} className="btn">
              &lt;
            </button>
            <button onClick={next} className="btn">
              &gt;
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlacesSlider;
