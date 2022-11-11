import React from "react";
import { useSelector } from "react-redux";
import "./CartList.scss";
const CartList = () => {
  const catlstes = useSelector((itme) => {
    return itme.cart.Cart_itm;
  });
  console.log(catlstes);
  return (
    <>
      <div className="Cart-list-container">
        <div className="cart-container">
          <h3 className="cartHeading-Name"> Your Cart List </h3>
        </div>
      </div>
      {catlstes.map((itm) => {
        return (
          <span className="item-wrper">
            <div className="cart-item">
              <img src={itm.image} alt="img" />
              <div className="controls">
                <button>+</button>
                <h4>2</h4>
                <button>-</button>
              </div>
              <div className="price">
                <h3>price</h3>
                <h5>{itm.price}</h5>
              </div>
              <div className="closbutton">
                <button>X</button>
              </div>
            </div>
          </span>
        );
      })}
    </>
  );
};

export default CartList;
