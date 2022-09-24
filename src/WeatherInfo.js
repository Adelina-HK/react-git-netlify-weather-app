import React from "react";
import kitty from "./kitty.gif";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-6">
          <img src={props.info.icon} alt={props.info.description} />
          <div className="col-sm-12">
            <img src={kitty} alt="pic kitty" className="kitty" width={100} />
          </div>
        </div>
        <div className="col-sm-4 mt-3 center">
          <ul className="mt-4">
            <li>Temperature: {props.info.temperature} ℃</li>
            <li>Description: {props.info.description}</li>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
