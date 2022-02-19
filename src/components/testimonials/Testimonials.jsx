import React from "react";
import "./testimonials.css";
import Client from "./Client";
import { clientReviews } from "../../data";

// import Swiper core and required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testiminials__container mySwiper"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clientReviews
          ? clientReviews.map(({ id, name, img, review }) => {
              return (
                <SwiperSlide key={id}>
                  <Client img={img} name={name} review={review} />
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </section>
  );
};

export default Testimonials;
