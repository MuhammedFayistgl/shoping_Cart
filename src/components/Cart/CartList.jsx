import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartContDicreas,
  CartContIngres,
  CartItemRemove,
} from "../../app/CartSlice";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { confirmAlert } from "react-confirm-alert";
import "./CartList.css";

const CartList = () => {
  const dispatch = useDispatch();
  const Cart_cont = useSelector((data) => data.cart.Cart_itm0);
  const catlstes = useSelector((itme) => {
    return itme.cart.Cart_itm;
  });

  return (
    <>
      <div className="Cart-list-container">
        <div className="cart-container">
          <h3 className="cartHeading-Name"> Your Cart List </h3>
        </div>
      </div>
      <span className="item-totel-wrwper">
        <span className="item-wrper">
          {catlstes.map((itm,index) => {
            return (
              <div key={index} className="cart-item">
                <img src={itm.image} alt="img" />
                <div className="controls">
                  <button onClick={() => dispatch(CartContIngres(itm.id))}>
                    +
                  </button>
                  <h4>{itm.count}</h4>
                  <button
                    className="btn-"
                    onClick={() => dispatch(CartContDicreas(itm.id))}
                  >
                    -
                  </button>
                </div>
                <div className="price">
                  <h3>price</h3>
                  <h5>{itm.price}</h5>
                </div>
                <div className="closbutton">
                  <button
                    onClick={() => {
                      const options = {
                        title: "Are You Shure",
                        message: "Cart item Removed",
                        buttons: [
                          {
                            label: "Yes",
                            onClick: () => dispatch(CartItemRemove(itm)),
                          },
                          {
                            label: "No",
                            onClick: () => null,
                          },
                        ],
                      };

                      confirmAlert(options);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </span>
        <div className="total-conainer">
          <div className="totel-items">
            <div className="items-keys">
              <h4>Price (1 item)</h4>
              <h4>Discount</h4>
              <h4>Delivery Charges</h4>
            </div>
            <div className="items-valus">
              <h4>₹1,990</h4>
              <h4>− ₹1,110</h4>
              <h4>FREE</h4>
            </div>
          </div>
          <hr />
          <div className="totel-items-total">
            <div className="totel-items-keys">
              <h2>Total Amount</h2>
            </div>
            <div className="items-valus">
              <h2>₹880</h2>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default CartList;
