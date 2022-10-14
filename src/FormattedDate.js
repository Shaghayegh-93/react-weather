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
  console.log(date);

  let day = days[date.getDay()];
  // console.log(day)

  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours} :{minutes}
    </div>
  );
};

export default FormattedDate;
