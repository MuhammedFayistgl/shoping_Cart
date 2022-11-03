import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Heder.scss";

const Heder = () => {
  return (
    <div className="Heder-container">
      <div className="heder-conteoner-section-1">
        <div className="logo">
          {" "}
          <Link to={"/"}> LOGO </Link>{" "}
        </div>

        <div className="serch-bar">
          <div class="search-box">
            <input
              type="text"
              class="search-input"
              placeholder="Search for Products Brands & Categories"
            />

            <button class="search-button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="nav-icons">
          <i class="fas fa-user"></i>      
          <i class="fas fa-heart"></i>
          <NavLink to={"/Cart"}>
            <div className="notification Cart">2</div>
            <i class="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </div>
      <div className="navbody">
        <div className="heder-conteoner-section-2 flex">
          <div className="dropdwnbar"></div>
          <ul className="li-none flex navitems">
            <NavLink to={'/'}>
              <li >Home</li>
            </NavLink>
            <li>Discounts</li>
            <li>New Arrivals</li>
            <li>Trending</li>
            <li>Deals for you</li>
            <li>Weekly offers</li>
            <li>Become A vendor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heder;
