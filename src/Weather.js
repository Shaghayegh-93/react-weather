import React from "react";
import "./weather.css";
const Weather = () => {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            {" "}
            <input
              type={"search"}
              placeholder="Enter a city.."
              className="formControl"
              autoComplete="on"
            />
          </div>
          <div className="col-3">
            {" "}
            <input
              type={"submit"}
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 20:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          <span className="temperature">13</span>
          <span className="unit">°C</span>
          
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 7%</li>
            <li> Humidity: 86%</li>
            <li> Wind: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
