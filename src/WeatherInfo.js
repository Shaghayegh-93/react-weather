import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

const WeatherInfo = ({ info }) => {
  return (
    <div className="weatherInfo">
      {" "}
      <h1>{info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={info.date} />
        </li>
        <li className="text-capitalize">{info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={info.icon}  />
         
          <span className="temperature">{Math.round(info.temperature)}</span>
          <span className="unit">°C</span>
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
