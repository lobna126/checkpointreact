import React from "react";
import product from "./product";

const Image=()=>{
    return<img src={product.image}alt={product.name} style={{ borderRadius: '50%', marginTop: '10px' }}/>;
  
};

export default Image;