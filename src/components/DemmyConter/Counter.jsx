import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { decrement, ingrement } from "../../redux/actionTyp";
import "./style.css";

const Counter = () => {
  const {valu} = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(valu);
  return (
    <div className="cont-container">
      <Link to={"counter"} />

      <button className="cont-btn" onClick={() => dispatch(ingrement())}>
        INCREMRNT
      </button>
      <h1>{valu}</h1>
      <button className="cont-btn"  onClick={() => dispatch(decrement())} >DICREMUNT</button>
    </div>
  );
};

export default Counter;
