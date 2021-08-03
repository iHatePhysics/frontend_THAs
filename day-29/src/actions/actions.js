const loadWeather = (val) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=d42d5430da454112a8382548210108&q=${val}`
    )
      .then((res) => res.json())
      .then((weather) => {
        return dispatch({
          type: "Load_Weather",
          payload: weather,
        });
      });
  };
};

const toggleTheme = () => {
  return {
    type: "Change_Theme",
  };
};
export { loadWeather, toggleTheme };
