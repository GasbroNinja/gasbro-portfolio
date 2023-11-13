import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/Micky-avtr.jpeg'
import AVTR2 from '../../assets/Stef-Miceli-avtr.jpeg' 
// import Swiper core and required modules
import { Navigation, Pagination, } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from other Developers</h5>
      <h2>Testimonials</h2>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="container testimonials__container">
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR1} alt="Micky-Dev" />
              </div>
              <h5 className="client__name">Michelangelo Arcangelo Tedesco</h5>
              <h5 className="client__name-2">Fullstack Dev & Influencer</h5>
              <small className="client__review">
                "Nice teamworker, strong mentality, and good attitude, great
                player, Graphic enthusiastic"
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR2} alt="Stef-Dev" />
              </div>
              <h5 className="client__name">Stefano Miceli</h5>
              <h5 className="client__name-2">Front-end Dev</h5>
              <small className="client__review">
                "Dedicated person, even though sometimes had some strange ideas,
                he is a good developer, and he has a great future in front of
                him"
              </small>
            </article>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
}

export default Testimonials