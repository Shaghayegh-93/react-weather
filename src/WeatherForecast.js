// import React, { useState } from "react";

// import "./weatherForecast.css";
// import axios from "axios";

// import WeatherForecastDay from "./WeatherForecastDay";

// const WeatherForecast = ({ cordinates }) => {
//   let [loaded, setLoaded] = useState(false);
//   let [forecast, setForecast] = useState(null);
//   function responseHandler(response) {
//     setForecast(response.data.daily);
//     setLoaded(true);
//   }
//   if (loaded) {
//     return (
//       <div className="weatherForecast">
//         <div className="row">
//           <div className="col">
//             <WeatherForecastDay data={forecast[0]} />
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     const apiKey = "f7e14489da08252f22b4d73661655318";
//     let longitude = cordinates.lon;
//     let latitude = cordinates.lat;
//     let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//     axios.get(api).then(responseHandler);
//     return "Laoding";
//   }
// };

// export default WeatherForecastDay;

import React, { useState, useEffect } from "react";
import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.cordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.cordinates.lon;
    let latitude = props.cordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
