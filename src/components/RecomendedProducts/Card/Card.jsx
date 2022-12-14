import "./card.css";
import "../../ComenCss/GlobalStyle.css";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { allProducts } from "../../../Context/Context";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../app/CartSlice";

import "swiper/css";
const Card = () => {
  const contextValue = useContext(allProducts);
  const dispath = useDispatch();

  const navigate = useNavigate();

  return (
    <>
      {contextValue.Data.map((item,index) => {
        return (
          <div key={index} className="Card-Container">
            <img
              key={item.id}
              onClick={() => {
                dispath({ type: item });
                navigate(`/ProductDetels/${item.id}`);
              }}
              src={item.image}
              alt="img"
              className="Card-img"
            />
            <div className="Card-info flex-column">
              <div className="Card-info-itm-name">
                {/* <h4>{item.category}</h4> */}
              </div>
              <div className="cart-price-Button">
                <button className="Card-info-itm-price-button">
                  ${item.price}
                </button>
                <span className="svgHomePage">
                  <svg
                    onClick={() => {
                      dispath(addToCart(item));
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 21.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-13.805-4c6.712 1.617 7 9 7 9h2l-4 4-4-4h2s.94-6.42-3-9z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

// };

export default Card;
