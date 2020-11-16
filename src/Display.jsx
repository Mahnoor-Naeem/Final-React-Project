import React from "react";
import img from "../src/images/1.jpg";

const Display = () => {
  return (
    <>
      <div className="container-fluid">
      <img src={img} className='img-fluid image' alt="image"/>
      </div>
    </>
  );
};

export default Display;
