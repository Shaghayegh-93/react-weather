import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

const Weather = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  function responseHandler(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      cord: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "f7e14489da08252f22b4d73661655318";
    // let city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(responseHandler);
  }
  function submitHandler(e) {
    e.preventDefault();
    search();
  }

  function cityChangeHandler(e) {
    setCity(e.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type={"search"}
                placeholder="Enter a city.."
                className="formControl"
                autoComplete="on"
                onChange={cityChangeHandler}
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
        <WeatherInfo info={weatherData} />

        <WeatherForecast cordinates={weatherData.cord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
};

export default Weather;
