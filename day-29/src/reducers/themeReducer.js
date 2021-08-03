const themeReducer = (state = false, action) => {
  switch (action.type) {
    case "Change_Theme":
      return !state;
    default:
      return state;
  }
};

export default themeReducer;
