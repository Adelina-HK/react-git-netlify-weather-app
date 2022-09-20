import React, { startTransition, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import "./App.css";


export default function App() {
  let [query, setQuery] = useState("");
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("");

  function showWeather(response) {
    setQuery(true);

    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
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
        <input type="search" placeholder="Type a city" className="me-3" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (query) {
    return (
      <div>
        {searchForm}
        <ul>
          <li>Temperature: {weather.temperature} ℃</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {searchForm}
        <div className="loader">
          <ClipLoader color="orange" loading={true} size={60} />
        </div>
      </div>
    );
  }
}
