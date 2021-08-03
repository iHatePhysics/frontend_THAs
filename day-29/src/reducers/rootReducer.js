import weatherReducer from "./weatherReducer";
import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  theme: themeReducer,
});

export default rootReducer;
