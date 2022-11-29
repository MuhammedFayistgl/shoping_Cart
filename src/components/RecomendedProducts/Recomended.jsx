import Card from "./Card/Card";
import "./recomended.css";
import "../ComenCss/GlobalStyle.css";
import FlashDelas from "../Flash Delas/FlashDelas";
import TopCategories from "../Top Categories/TopCategories";

const Recomended = () => {
  return (
    <>


      <div className="recom-bg-main-wrape">
        {/* <h5>Explore Awesome Products</h5> */}
        <h2>Recommended For You</h2>
      </div>
      <div className="recom-bg-wraper ">
        <Card />
      <FlashDelas />
        <TopCategories />
      </div>
    </>
  );
};

export default Recomended;
