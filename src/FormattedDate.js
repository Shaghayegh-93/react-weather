import React from "react";

const FormattedDate = ({ date }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.geMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours} :{minutes}{" "}
    </div>
  );
};

export default FormattedDate;
