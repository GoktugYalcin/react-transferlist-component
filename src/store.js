import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import data from "./dummy.json";

const initialState = {
  leftData: data,
  rightData: [],
  leftSelected: [],
  rightSelected: [],
  search: { left: "", right: "" },
  checkStates: { left: false, right: false }
};

const composeEnhancers = composeWithDevTools({});

const middleware = applyMiddleware(reduxPromise, thunk);

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(middleware)
);
