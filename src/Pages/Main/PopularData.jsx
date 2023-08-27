import React from "react";
import "./PopularData.css";

const PopularData = () => {
  const popularProductData = [
    {
      id: 0,
      title: "Redragon Gaming Keyboard & Mouse Combo",
      image:
        "https://media.kohlsimg.com/is/image/kohls/4300306?wid=180&hei=180&op_sharpen=1",
      price: 39.99,
      webID: "4300306",
    },
    {
      id: 1,
      title: "Redragon K582 SURARA RGB Backlit Gaming Keyboard",
      image:
        "https://media.kohlsimg.com/is/image/kohls/4300298?wid=180&hei=180&op_sharpen=1",
      price: 59.99,
      webID: "4300298",
    },
    {
      id: 2,
      title: "Adesso Tru-Form 150 - 3-Color Illuminated Ergonomic Keyboard",
      image:
        "https://media.kohlsimg.com/is/image/kohls/4657448?wid=180&hei=180&op_sharpen=1",
      price: 49.99,
      webID: "4657448",
    },
    {
      id: 3,
      title: "Verbatim Slimline Corded USB Keyboard",
      image:
        "https://media.kohlsimg.com/is/image/kohls/4650265?wid=180&hei=180&op_sharpen=1",
      price: 10.99,
      webID: "4650265",
    },
    {
      id: 4,
      title: "Verbatim Slimline Corded USB Keyboard & Mouse",
      image:
        "https://media.kohlsimg.com/is/image/kohls/4650259?wid=180&hei=180&op_sharpen=1",
      price: 17.99,
      webID: "4650259",
    },
    {
      id: 5,
      title: "Redragon K552 KUMARA Backlit Gaming Keyboard",
      image:
        "https://media.kohlsimg.com/is/image/kohls/4300299?wid=180&hei=180&op_sharpen=1",

      price: 44.99,
      webID: "4300299",
    },
  ];

  return (
    <div>
      <div className="popularProducts">
        <h2>Popular sellers in Keyboards</h2>
        <div className="popularProducts_items">
          {popularProductData.map((data) => (
            <div className="popular_items" key={data.id}>
              <img src={data.image} alt="" height="100" width="100" />
              <h4>{data.webID}</h4>
              <p className="title">{data.title}</p>
              <p>${data.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularData;
