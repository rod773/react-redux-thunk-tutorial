import { ActionTypes } from "./../constants/actionTypes";
import { axios } from "axios";

export const fetchProducts = async () => {
  const config = {
    method: "GET",
    url: "/products",
    headers: {
      "Cpntent-Type": "aplication/json",
      Acept: "aplication/json",
    },
  };

  const response = await axios(config).catch((error) => console.log(error));

  return {
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response,
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
