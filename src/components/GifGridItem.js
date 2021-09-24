import React from "react";

const GifGridItem = (props) => {
  return (
    <div className="card">
      <img src={props.img.imgUrl} alt="" />
      <p>{props.img.imgName}</p>
    </div>
  );
};

export default GifGridItem;
