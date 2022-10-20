import React, { useContext } from "react";
import "./card.scss";
import '../../ComenCss/GlobalStyle.scss'
const Card = ({image , price , category}) => {

  return (
   
    <>
      <div className="Card-Container">
        <img
          src={image}
          alt="img"
          className="Card-img"
        />
        <div className="Card-info flex-column">
            <div className="Card-info-itm-name">
                <h4>{category}</h4>
            </div>
            <button className="Card-info-itm-price-button">{price}</button>

        </div>
      </div>
    </>
  );
};

export default Card;
