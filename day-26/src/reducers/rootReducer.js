import inputReducer from "./inputreducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;
