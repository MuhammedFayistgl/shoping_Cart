import "./card.scss";
import "../../ComenCss/GlobalStyle.scss";
import { useNavigate} from "react-router-dom";
import React, { useContext } from "react";
import { allProducts } from "../../../Context/Context";
import { useDispatch } from "react-redux";
const Card = () => {
  const contextValue = useContext(allProducts);
  const  dispath = useDispatch()
 
   const navigate = useNavigate()

     return (
     
    <>
    { contextValue.Data.map((item)=>{
    
      return(
      
       
          <div key={item.id} onClick={() => {
            dispath({type:item})
            navigate(`/ProductDetels/${item.id}`)
          }} className="Card-Container">
            <img src={item.image} alt="img" className="Card-img" />
            <div className="Card-info flex-column">
              <div className="Card-info-itm-name">
                {/* <h4>{item.category}</h4> */}
              </div>
              <button className="Card-info-itm-price-button">${item.price}</button>
            </div>
          </div>
        
      )
    })}
     
    </>
   );
 };
 
// };

export default Card;
