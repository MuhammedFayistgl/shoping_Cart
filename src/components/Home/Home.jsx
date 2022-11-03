import React from "react";
import { lazy, Suspense } from "react";
import Loder from "../Loader/Loder";


const MinImg = lazy(() => import("../Main-img/MinImg"));
const Recomended = lazy(() => import("../RecomendedProducts/Recomended"));
const Home = () => {
  return (
    <>
   
        <Suspense fallback={<Loder />}>
          <MinImg />

          <Recomended />
        </Suspense>
     
    </>
  );
};

export default Home;
