import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as dataReducer } from "./dataReducer/reducer";
export const store = legacy_createStore(
  combineReducers(dataReducer),
  applyMiddleware(thunk)
);
