import * as types from "./actioTypes";

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
