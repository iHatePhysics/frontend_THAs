import React from "react";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const placeData = useSelector((state) => state.weather);
  return (
    <div>
      <div className="container">
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
};
export default WeatherCard;
