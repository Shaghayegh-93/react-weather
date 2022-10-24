import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

const WeatherInfo = ({ info }) => {
  return (
    <div className="weatherInfo">
      {" "}
      <h1>{info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={info.date} />
        </li>
        <li className="text-capitalize mb-3">{info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={info.icon} size={80} />

          <WeatherTemperature celcius={info.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: {info.humidity}%</li>
            <li> Wind: {info.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
