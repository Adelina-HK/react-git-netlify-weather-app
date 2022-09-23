import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import kitty from "./kitty.gif";
import FormattedDate from "./FormattedDate.js";
import IconDate from "./icons-date.png";

export default function App() {
  let [query, setQuery] = useState("");
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("");
  let [dateInfo, setDateInfo] = useState();

  function showWeather(response) {
    console.log(response.data);
    setQuery(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setDateInfo (date= new Date(response.data.dt * 1000));
    
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1dad91bc92f6c69698e1aad50d0a7304";
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <div className="Weather">
      <h1 className="mb-3">React Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          className="me-3"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (query) {
    return (
      <div>
        {searchForm}
        <div className="row">
          <div className="col-sm">
            <img src={weather.icon} alt={weather.description} />
            <div className="col-sm">
              <img src={kitty} alt="pic kitty" className="kitty" width={100} />
            </div>
          </div>
          <div className="col-sm">
            <ul>
              <li>Temperature: {weather.temperature} ℃</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        {searchForm}
        <FormattedDate date={date} />
        <img src={IconDate} alt="DateInfo pic" width="70px" />{" "}
        
      </div>
    );
  }
}
