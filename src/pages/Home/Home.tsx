import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// The `state` arg is correctly typed as `RootState` already

//for images
import imgProfileLogo from "../../assets/My-profile-photo.jpg";

const Home = () => {




  return (
    <div>
      <div className="lg:ml-[330px] md:ml-[120px] pt-[50px]">
        <section className="section_1">
          <h1>Home</h1>
          <div className="swiper_home">
            <Swiper
              slidesPerView={1}
              spaceBetween={2}
              // pagination={{
              //   // clickable: true,
              // }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
              <SwiperSlide><img
                  src={imgProfileLogo}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                /></SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
