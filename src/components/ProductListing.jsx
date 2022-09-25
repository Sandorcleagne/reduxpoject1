import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions.js";
import ProductComponen from "./ProductComponen";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const callApi = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponen />
    </div>
  );
};

export default ProductListing;
