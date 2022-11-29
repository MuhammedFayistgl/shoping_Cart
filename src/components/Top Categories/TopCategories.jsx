import React from "react";
import "./TopCategories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
//import { Pagination } from "swiper";
import Tdata from "./TCtgryDATA";
const TopCategories = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={40}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {Tdata.map((value, index) => {
          return (
            <>
              <SwiperSlide>
                <div className="TopCtgryproduct" key={index}>
                  <div className="nametop d_flex">
                    <span className="tleft">{value.para}</span>
                    <span className="tright">{value.desc}</span>
                    <div className="img">
                      <img src={value.cover} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default TopCategories;
