const inputName = (val) => {
  return {
    type: "ADD_NAME",
    payload: val,
  };
};
const inputEmail = (val) => {
  return {
    type: "ADD_EMAIL",
    payload: val,
  };
};
export { inputName, inputEmail };
