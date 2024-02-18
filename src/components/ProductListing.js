import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

import { setProducts, fetchProducts } from "./../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-4 gap-1">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
