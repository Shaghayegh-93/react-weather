import React, { useState } from "react";

import "./weatherForecast.css";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

const WeatherForecast = ({ cordinates }) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function responseHandler(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f7e14489da08252f22b4d73661655318";
    let longitude = cordinates.lon;
    let latitude = cordinates.lat;
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(api).then(responseHandler);
    return "Laoding";
  }
};

export default WeatherForecastDay;
