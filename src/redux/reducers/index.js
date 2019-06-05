import { combineReducers } from "redux";
import GeneralReducer from "./general";

export default combineReducers({
  general: GeneralReducer
});
