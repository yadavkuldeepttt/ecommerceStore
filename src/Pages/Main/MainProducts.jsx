import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiActions } from "../../Store/productApiSlice";
import "./MainProducts.css";
import MyProduct from "./MainProduct";
import { uiActions } from "../../Store/uiSlice";

const MainProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        console.log(data);
        setApiData(data);
        setFilteredData(data); // Initialize filteredData with all data
        dispatch(apiActions.apiData({ items: data }));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchProductData();
  }, [dispatch]);

  const filterProduct = (cat) => {
    if (cat === "All") {
      setFilteredData(apiData); // Show all products
    } else {
      const updatedList = apiData.filter((x) => x.category === cat);
      setFilteredData(updatedList);
    }
  };

  return (
    <div>
      <div className="filter_buttons">
        <button
          className="filter_alldata filter_btn"
          onClick={() => filterProduct("All")}>
          All
        </button>
        <button
          className="filter_btn"
          onClick={() => filterProduct("men's clothing")}>
          Men's Clothing
        </button>
        <button
          className="filter_btn"
          onClick={() => filterProduct("women's clothing")}>
          Women's Clothing
        </button>
        <button
          className="filter_btn"
          onClick={() => filterProduct("jewelery")}>
          Jewelry
        </button>
        <button
          className="filter_btn"
          onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
      </div>
      <div className="mainProducts">
        <h2 style={{ textAlign: "center", padding: "4rem 0 1rem 0" }}>
          Latest Products
        </h2>
        <div className="mainProducts_container">
          <MyProduct products={filteredData} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
