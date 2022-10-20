import React from "react";
import "./MinImg.scss";
const MinImg = () => {
  return (
    <>
      <div className="maine-wraper">
        <img
          className="main-img"
          alt="img"
          src="https://images.unsplash.com/photo-1647503380147-e075b24f4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <div className="main-info">
          <h1>GET THE NEW IPONE 12 PRO</h1>
          <p>A transformative triple‑camera system that adds tons of capability without complexity</p>
          <button className="button-primery">Buy Now</button>
          <button className="button-secondary">With $599 with trade-in</button>
        </div>
      </div>
    </>
  );
};

export default MinImg;
