import { ActionTypes } from "./../constants/actionTypes";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    const config = {
      url: "https://fakestoreapi.com/products",
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
        Acept: "aplication/json",
      },
    };

    const data = await axios(config)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: data,
    });
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
