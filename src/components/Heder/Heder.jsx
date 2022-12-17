import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Heder.scss";

const Heder = () => {
  const CartCont = useSelector((itme) => itme);

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
            <div className="notification Cart">
              {CartCont.cart.Cart_itm.length}
            </div>
            <i class="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </div>
      <div className="navbody">
        <div className="heder-conteoner-section-2 flex">
          <div className="dropdwnbar"></div>
          <ul className="li-none flex navitems">
            <select name="ALL Categories" id="selections">
              <option selected>ALL Categories</option>
              <option value="">Camara & Phones</option>
              <option value="">Laptops</option>
              <option value="">Laptops</option>
              <option value="">Electronics</option>
            </select>

            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <li>Discounts</li>
            <li>New Arrivals</li>
            <li>Trending</li>
            <li>Deals for you</li>
            <li>Weekly offers</li>
            <li>Become A vendor</li>
          </ul>
          <label htmlFor="check-button">
            <input type="checkbox" id="check-button" />
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Heder;
