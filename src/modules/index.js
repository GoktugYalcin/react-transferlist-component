import { combineReducers } from "redux";
import {
  updateLeftListReducer,
  updateRightListReducer,
  updateRightSelectedReducer,
  updateLeftSelectedReducer,
  updateSearchReducer,
  updateCheckStatesReducer
} from "./transferListReducer";

export default combineReducers({
  leftData: updateLeftListReducer,
  rightData: updateRightListReducer,
  leftSelected: updateLeftSelectedReducer,
  rightSelected: updateRightSelectedReducer,
  search: updateSearchReducer,
  checkStates: updateCheckStatesReducer
});
