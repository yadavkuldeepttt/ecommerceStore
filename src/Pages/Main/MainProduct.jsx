import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { useStateValue } from "../../Store/AuthContext/authContext";

const MyProduct = ({ products, navigate }) => {
  const dispatch = useDispatch();
  const [{ user }] = useStateValue();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(cartActions.addItemToCart(product));
    }
  };

  return (
    <>
      {products.map((product) => (
        <div className="items" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            height="100"
            width="100"
          />
          <p className="category">{product.category}</p>
          <p className="title">{product.title}</p>
          <h4>${product.price}</h4>
          <button onClick={() => handleProductClick(product)}>
            View Details
          </button>
          <button
            onClick={() => handleAddToCart(product)}
            className="addcart__btn">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      ))}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
};

export default MyProduct;
