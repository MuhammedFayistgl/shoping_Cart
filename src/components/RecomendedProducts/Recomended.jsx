
import Card from "./Card/Card";
import "./recomended.scss";
import "../ComenCss/GlobalStyle.scss";


const Recomended = () => {
 

  return (
    <>
      <div className="recom-bg-main-wrape">
        <h5>Explore Awesome Products</h5>
        <h2>Recommended For You</h2>
      </div>
      <div className="recom-bg-wraper "><Card/></div>
    </>
  );
};

export default Recomended;
