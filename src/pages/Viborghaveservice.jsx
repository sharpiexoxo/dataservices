import React from "react";
import ImageSlider from "../components/imageslider";
import Services from "../components/serviceschild";

const Haveservice = () => {
  return (
    <div>
      <div>
        <ImageSlider />
      </div>

      <div className="services-container">
        <Services />
      </div>
    </div>
  );
};

export default Haveservice;
