import * as types from "./actioTypes";
const initstate = {
  isLoading: false,
  isError: false,
  data: [],
};
export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCC:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, ...payload],
      };
    case types.GET_DATA_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
