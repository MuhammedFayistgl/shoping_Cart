import React, { useEffect, useState } from "react";
import axios from "axios";
export const allProducts = React.createContext();

export const Context = ({children}) => {
  let [Data, setData] = useState([]);

  let getallProducts = async () => {
    await axios.get("https://fakestoreapi.com/products").then((rsp) => {
      setData(rsp.data);
    });
  };
  useEffect(() => {getallProducts();}, []);

  return (
   
    <allProducts.Provider value={{Data}}>
     
        {children}
      </allProducts.Provider>
    
  );
};
