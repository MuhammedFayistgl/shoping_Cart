import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MinImg.css";
import data from "./SldData";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fecthData } from "../../app/MainImgSlice";

const MinImg = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fecthData());
  }, []);

  // let img_Data = useSelector((data) => {
  //   return data.Data.DATA[0][0];
  // });

  // console.log(img_Data, "img_Data");
  return (
    <>
      {/*     
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
          {img_Data.map((data, index) => {
            {
              console.table(index, "hfjhfjhhhhhhhhhhhhhhhh");
            }
            return ( 
            <SwiperSlide>
              <div key={index} className="maine-wraper">
                <img className="main-img" alt="img" src={data} />

                <div className="main-info">
                  <h1>{""}</h1>
                  <p>
                    A transformative triple‑camera system that adds tons of
                    capability without complexity
                  </p>
                  <button className="button-primery">Buy Now</button>
                  <button className="button-secondary">
                    With $599 with trade-in
                  </button>
                </div>
              </div> 
              </SwiperSlide>
            );
          })}
       
      </Swiper>
 */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((i,inx) => {
          return (
            <SwiperSlide>
              <div key={inx} className="maine-wraper">
                <img
                  className="main-img"
                  alt="img"
                  src={i.cover}
                />

                <div className="main-info">
                  <h1>
                   {i.title}
                  </h1>
                  <p>
                   {i.desc}
                  </p>
                  <button className="button-primery">Buy Now</button>
                  <button className="button-secondary">
                    With $599 with trade-in
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MinImg;
