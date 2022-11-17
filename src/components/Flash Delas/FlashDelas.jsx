import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import "./FlashDelas.scss";
const FlashDelas = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">40% Off</span>
                <img
                  src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
                  alt="img"
                />
                <div className="product-like">
                  <label>0</label> <br />
                  <i className="fa-regular fa-heart" onClick={"increment"}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>shos</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>$9.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={"() => addToCart(productItems)"}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">40% Off</span>
                <img
                  src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
                  alt="img"
                />
                <div className="product-like">
                  <label>0</label> <br />
                  <i className="fa-regular fa-heart" onClick={"increment"}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>shos</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>$9.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={"() => addToCart(productItems)"}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">40% Off</span>
                <img
                  src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
                  alt="img"
                />
                <div className="product-like">
                  <label>0</label> <br />
                  <i className="fa-regular fa-heart" onClick={"increment"}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>shos</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>$9.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={"() => addToCart(productItems)"}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">40% Off</span>
                <img
                  src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
                  alt="img"
                />
                <div className="product-like">
                  <label>0</label> <br />
                  <i className="fa-regular fa-heart" onClick={"increment"}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>shos</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>$9.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={"() => addToCart(productItems)"}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FlashDelas;
