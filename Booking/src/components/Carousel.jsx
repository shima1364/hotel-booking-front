import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "../utility/sass/swiper.scss";
import "swiper/css";

function Carousel(props) {
  return (
    <div className="bg-white py-3 mt-5 container rounded-3">
      <h5>properties guests love</h5>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        effect="fade"
        spaceBetween={20}
        slidesPerView={5}
        navigation
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {props.image.map((items) => (
          <>
            <SwiperSlide
              key={items._id}
              className="d-flex flex-column align-items-center"
            >
              <img
                className="rounded-3"
                width="200"
                height="150"
                src={items.photos[0]}
                alt="pic"
              />
              <span className="mt-1 title">{items.name}</span>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
