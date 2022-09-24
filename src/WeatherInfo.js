import React from "react";
import kitty from "./kitty.gif";

export default function WeatherInfo (props){
  return (
    <div className="WeatherInfo">
      <div className="row">
        {" "}
        <div className="col-sm-6">
          <img src={props.weather.icon} alt={props.weather.description} />
          <div className="col-sm-12">
            <img src={kitty} alt="pic kitty" className="kitty" width={100} />
          </div>
        </div>
        <div className="col-sm-4 mt-3 center">
          <ul className="mt-3">
            <li>Temperature: {props.weather.temperature} ℃</li>
            <li>Description: {props.weather.description}</li>
            <li>Humidity: {props.weather.humidity} %</li>
            <li>Wind: {props.weather.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );}