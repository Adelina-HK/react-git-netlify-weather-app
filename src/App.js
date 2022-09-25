import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import Wallpaper from "./Wallpaper.jpg";

export default function App() {
  let [query, setQuery] = useState("");
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("");

  function showWeather(response) {
    console.log(response.data);
    setQuery(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      data: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "1dad91bc92f6c69698e1aad50d0a7304";
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <div className="Weather m-3">
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
        <img src={Wallpaper} className="wallpaper" alt="wallpaper" />
        {searchForm}
        <h3>The weather in {weather.city} is:</h3>
        <WeatherInfo info={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        {" "}
        <img src={Wallpaper} className="wallpaper" alt="wallpaper" />
        {searchForm}
      </div>
    );
  }
}
