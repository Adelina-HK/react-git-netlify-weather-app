import React from "react";
import kitty from "./kitty.gif";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-4">
          <WeatherIcon code={props.info.icon} />

          <div className="col-sm-12">
            <img src={kitty} alt="pic kitty" className="kitty" width={100} />
          </div>
        </div>
        <div className="col-sm-3">
          <WeatherTemperature celsius={props.info.temperature} />
        </div>
        <div className="col-sm-5 mt-2">
          <ul>
            <li>
              <strong>Description: </strong>
              {props.info.description}
            </li>
            <li>
              <strong>Humidity: </strong>
              {props.info.humidity} %
            </li>
            <li>
              <strong>Wind: </strong>
              {props.info.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
