import React, { useState } from "react";

const WeatherTemperature = ({ celcius }) => {
  const [unit, setUnit] = useState("celsius");
  function converToFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }
  function converToCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a onClick={converToFahrenheit} href="/">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a onClick={converToCelsius} href="/">
            {" "}
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
};

export default WeatherTemperature;
