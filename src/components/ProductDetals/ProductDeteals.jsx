import { Link, useParams } from "react-router-dom";
import "./productDetals.scss";
import { allProducts } from "../../Context/Context";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/CartSlice";

const ProductDeteals = () => {
  const dispatch = useDispatch();
  let obj = useParams();
  let allProductsForFilter = useContext(allProducts);
  let findValu = allProductsForFilter.Data.filter((itme) => {
    return obj.id == itme.id;
  }).map((itme) => {
    return (
      <div key={itme.id} className="prduct-detals-container ">
        <div className="prduct-detals-image">
          <img src={itme.image} alt="img" />
          <div className="buttons">
            <button
              onClick={() => dispatch(addToCart(itme))}
              className="CatButn"
            >
              <Link to={""}>
                 ADD TO CART
                  </Link>{" "}
            </button>
            <button className="BuyButn">
              {" "}
              <Link> BUY NOW </Link>{" "}
            </button>
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
  return <>{findValu}</>;
};

export default ProductDeteals;
