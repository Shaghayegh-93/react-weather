// import React from "react";
// import WeatherIcon from "./WeatherIcon";

// const WeatherForecastDay = ({ data }) => {
//   function maxTemperature() {
//     let temperature = Math.round(data.temp.max);
//     return `${temperature}°`;
//   }

//   function minTemperature() {
//     let temperature = Math.round(data.temp.min);
//     return `${temperature}°`;
//   }
//   function day() {
//     let date = new Date(data.dt * 1000);
//     let day = date.getDay();

//     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     return days[day];
//   }
//   return (
//     <div>
//       <div className="weatherForecastDay">{day()}</div>
//       <WeatherIcon code={data.wether[0].icon} size={50} />
//       <div className="weatherForecastTemp">
//         <span className="weatherForecastTempMax">{maxTemperature()}</span>
//         <span className="weatherForecastTempMin">{minTemperature()}</span>
//       </div>
     
//     </div>
//   );
// };

// export default WeatherForecastDay;

