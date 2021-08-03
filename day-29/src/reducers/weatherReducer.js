const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case "Load_Weather":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default weatherReducer;
