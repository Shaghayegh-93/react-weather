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
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }
  const day = days[date.getDay()];
  const hours = date.getHours();
  const minutes = date.geMinutes();
  return (
    <div>
      {day} {hours} :{minutes}{" "}
    </div>
  );
};

export default FormattedDate;
