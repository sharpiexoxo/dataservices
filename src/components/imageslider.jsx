import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ViborgAboutAPI } from "../helpers/viborgapi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../sass/imageslider.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ImageSlider() {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    ViborgAboutAPI()
      .then((data) => {
        console.log(data);

        setServices(data);
        setError(false);
      })
      .catch((error) => {
        console.log("404 - Der er sket en fejl");
        setError(true);
        setServices();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {services &&
          services.map((v, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-content">
                <div className="overlay-color">
                  <div>
                    <h1 className="review-headline">Kundeudtalelser</h1>
                    <hr className="headline-break-review" />
                  </div>
                </div>
                <h2>"{v.content}"</h2>
                <h2>- {v.author}</h2>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
