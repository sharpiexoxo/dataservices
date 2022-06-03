import React from "react";
import { useState, useEffect } from "react";
import { WeatherApi } from "../helpers/weatherapi";

const Weather = () => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    WeatherApi()
      .then((data) => {
        console.log(data);

        setWeather(data);
        setError(false);
      })
      .catch((error) => {
        console.log("404 - Der er sket en fejl");
        setError(true);
        setWeather();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="headline">3 hours interval forecast</h1>

      <div>
        {weather && (
          <div className="weather-box-main">
            {weather.list.map((w, i) => (
              <div className="weather-box" key={i}>
                <h2>Aarhus</h2>
                <h2>{w.city?.name}</h2>
                <h2>{w.dt_txt}</h2>
                <h2>Degrees: {w.main.temp}&deg;</h2>
                <h2>Feels like: {w.main.feels_like}&deg;</h2>
                <h2>Wind speed: {w.wind.speed}</h2>
                <h2>Weather Description: {w.weather[0].main}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
