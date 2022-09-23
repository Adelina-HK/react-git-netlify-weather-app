import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import IconDate from "./icons-date.png";
import FormattedDate from "./FormattedDate.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="WeatherApp">
      <br />
      <div className="row m-2">
        <div className="col-2">
          <img src={IconDate} alt="DateInfo pic" width="70px" />{" "}
          <FormattedDate />
        </div>
        <div className="col-8">
          <h1 className="m-2">React Weather App</h1>
        </div>
      </div>
      
      <App />
      <footer className="mt-4">
        <a
          href="https://github.com/Adelina-HK/react-git-netlify-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my code on my GitHub{" "}
        </a>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
