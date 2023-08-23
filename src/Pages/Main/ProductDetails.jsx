import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {" "}
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>
          Rating:&nbsp;{product.rating.rate}&nbsp;({product.rating.count})
        </p>
        <h4>Price: &#8377;{product.price}</h4>
      </div>
    </div>
  );
};

export default ProductDetails;
