import React from "react";
import "./FormattedDate.css";

export default function FormattedDate() {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return (
    <div className="DateInfo">
      <p1>{day}</p1>
      <p2 className="ms-3">
        {hours}:{minutes}
      </p2>
    </div>
  );
}
