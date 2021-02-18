import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers.js";
import middlewares from "./middleware.js";
const initialState = {};
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);
