import React from "react";
import MyNavbar from "../navbar/Navbar";
import PlacesSlider from "../Slider/PlacesSlider";
const Home = () => {
  return (
    <div className="home">
      <MyNavbar />
      <PlacesSlider />
      <div className="overlay"></div>
    </div>
  );
};

export default Home;
