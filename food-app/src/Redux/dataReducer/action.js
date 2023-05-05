import * as types from "./actioTypes";
import axios from "axios";
export const getDataReq = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

export const getDataSucc = (payload) => {
  return {
    type: types.GET_DATA_SUCC,
    payload,
  };
};
export const getDataErr = () => {
  return {
    type: types.GET_DATA_ERR,
  };
};

export const getData = (q, off = 0) => {
  return axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=97c7f7ae16d04c8f94bdf953267ed0da&query=${q}&offset=${off*10}`
  );
};
