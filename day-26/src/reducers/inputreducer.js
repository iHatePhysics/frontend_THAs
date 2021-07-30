const initialText = {
  name: "",
  email: "",
};
const inputReducer = (state = initialText, action) => {
  if (action.type === "ADD_NAME") {
    console.log(state);
    return { ...state, name: action.payload };
  }
  if (action.type === "ADD_EMAIL") {
    console.log(state);
    return { ...state, email: action.payload };
  }
  return state;
};
export default inputReducer;
