import { data } from "../../resources/data";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const items = data;

const PlacesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  console.log(activeIndex);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
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
        <Col className="container" sm="12" md="9">
          <Container>
            <Row className="d-flex justify-content-md-end">
              <Col className="order-1 order-lg-0" sm="5" md="7">
                <h1>{name}</h1>
                <p>{description}</p>
                <Link to={`/places/${id}`}>
                  <button className="btn btn-warning">Booking &#8594;</button>
                </Link>
              </Col>
              <Col
                sm="3"
                md="3"
                className="d-flex justify-content-center order-0 order-lg-1 align-align-self-end"
              >
                <img
                  src={require("../../" + image)}
                  alt=""
                  width="200"
                  height="300"
                  style={{ border: "4px solid #ffb400", borderRadius: "20px" }}
                />
              </Col>
            </Row>
          </Container>
        </Col>

        <Col
          md="3"
          className="d-none d-lg-flex justify-content-between align-items-center order-12 overflow-hidden"
        >
          {itemsWithDiffId.map((item) => {
            return (
              <img
                src={require("../../" + item.image)}
                alt=""
                width="200"
                height="300"
                className="ml-3"
                onClick={() => goToIndex(item.id)}
              />
            );
          })}
        </Col>
      </>
    );
  };

  return (
    <div
      className="container-fluid text-white position-relative w-100"
      style={{ top: "20vh", height: "auto", zIndex: 10 }}
    >
      <Row className="overflow-hidden mb-5">{slides(activeIndex)}</Row>
      <Col xs="12">
        <div
          className="carousel-control m-auto d-block"
          style={{ bottom: "20px" }}
        >
          <button onClick={previous} className="btn">
            &lt;
          </button>
          <button onClick={next} className="btn">
            &gt;
          </button>
        </div>
      </Col>
    </div>
  );
};

export default PlacesSlider;
