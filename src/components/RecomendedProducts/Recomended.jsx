import React, { useContext } from "react";
import Card from "./Card/Card";
import "./recomended.scss";
import "../ComenCss/GlobalStyle.scss";
import {allProducts} from '../../Context/Context'



const Recomended = () => {

      const contextValue = useContext(allProducts)

   let RecoComponent = contextValue.Data.map((itm)=>{
        return(
        <Card image ={ itm.image }
        price = {itm.price}
        category = {itm.category}
        />

        )
      })

console.log(contextValue);

  return (
    <>
      <div className="recom-bg-main-wrape">
        <h5>Explore Awesome Products</h5>
        <h2>Recommended For You</h2>
      </div>
      <div className="recom-bg-wraper ">
          {RecoComponent}

      </div>
    </>
  );
};

export default Recomended;
