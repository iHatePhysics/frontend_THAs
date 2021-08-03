import { useState } from "react";
function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = (val) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=d42d5430da454112a8382548210108&q=${val}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaceData(data);
        console.log(data);
      });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="form">
            <input
              className="input-box"
              type="text"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={(e) => {
                updatePlaceData(place);
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="weather-card">
          {placeData.location ? (
            <div className="wea-data">
              <img
                className="icon "
                src={placeData.current.condition.icon}
                alt=""
              ></img>
              <div>{placeData.current.condition.text}</div>
              <div className="temp">{placeData.current.temp_c}° C</div>
              <div className="loc-name">{placeData.location.name}</div>
              <div className="misc-con">
                <div className="box1">
                  <div className="misc-title">Wind Speed</div>
                  <div className="misc-data-row">
                    <div className="misc-data">
                      {placeData.current.wind_kph}
                    </div>
                    kph
                  </div>
                </div>
                <div className="box1">
                  <div className="misc-title">Precipitation</div>
                  <div className="misc-data-row">
                    <div className="misc-data">
                      {placeData.current.precip_mm}
                    </div>
                    mm
                  </div>
                </div>
                <div className="box1">
                  <div className="misc-title">Humidity</div>
                  <div className="misc-data-row">
                    <div className="misc-data">
                      {placeData.current.humidity}
                    </div>
                    %
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1>Place Not Found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
