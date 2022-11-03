import { Link, useParams } from "react-router-dom";
import "./productDetals.scss";
import { allProducts } from "../../Context/Context";
import { useContext } from "react";

const ProductDeteals = () => {
  let obj = useParams();
  console.log("obj", obj.id);
  let allProductsForFilter = useContext(allProducts);
  console.log("allProductsForFilter", allProductsForFilter);

  let findValu = allProductsForFilter.Data.filter((itme) => {
    return obj.id == itme.id;
  }).map((itme) => {
    return (
      <div className="prduct-detals-container ">
        <div className="prduct-detals-image">
          <img src={itme.image} alt="img" />
          <div className="buttons">
            <button className="CatButn" ><Link to={'/Cart'}> ADD TO CART </Link> </button>
            <button className="BuyButn" > <Link> BUY NOW </Link> </button>
          </div>
        </div>
        <div className="prduct-detals-information">
          <h3>{itme.title}</h3>
          <h1>$ {itme.price}</h1>
          <p>{itme.description}</p>
          <div className="custommer-rate"></div>
        </div>
      
      </div>
    );
  });

  console.log("my vALU", findValu);
  return <>{findValu}</>;
};

export default ProductDeteals;
