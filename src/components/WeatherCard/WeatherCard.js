import React from "react";
import classes from "./WeatherCard.module.css";

const WeatherCard = ({ dayWeather, date, dayTime }) => {
  const temp = Math.round(dayWeather.main.temp - 273);
  const main = dayWeather.weather[0].main;
  const desc = dayWeather.weather[0].description;

  const getIcon = (main, desc, dayTime) => {
    switch (main) {
      case "Thunderstorm":
        if (dayTime === "night") {
          return "11n";
        } else return "11d";
      case "Drizzle":
        if (dayTime === "night") {
          return "09n";
        } else return "09d";
      case "Rain":
        if (desc === "freezing rain") {
          return "13d";
        } else if (
          desc === "ligh intensity shower rain" ||
          "shower rain" ||
          "heavy intensity shower rain" ||
          "ragged shower rain"
        ) {
          return "09d";
        } else {
          if (dayTime === "night") {
            return "10n";
          } else return "10d";
        }
      case "Snow":
        if (dayTime === "night") {
          return "13n";
        } else return "13d";
      case "Mist" ||
        "Smoke" ||
        "Haze" ||
        "Dust" ||
        "Fog" ||
        "Sand" ||
        "Ash" ||
        "Squal" ||
        "Tornado":
        if (dayTime === "night") {
          return "50n";
        } else return "50d";
      case "Clear":
        if (dayTime === "night") {
          return "01n";
        } else return "01d";
      case "Clouds":
        if (desc === "few clouds") {
          if (dayTime === "night") {
            return "02n";
          } else return "02d";
        } else if (desc === "scattered clouds") {
          return "03d";
        } else {
          return "04d";
        }

      default:
        return "";
    }
  };

  const getDate = (date) => {
    return new Date(date).getDay();
  };

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const today = weekDays[new Date().getDay()];
  const tomorrow = weekDays[new Date().getDay() + 1];
  const day = weekDays[getDate(date)];
  const windSpeed = Math.round(dayWeather.wind.speed);
  const humidity = dayWeather.main.humidity;

  return (
    <article className={classes.weatherCard}>
      <p className={classes.weatherCard__day}>
        {day === today ? "Today" : day === tomorrow ? "Tomorrow" : day}
      </p>
      <div className={classes.weatherCard__desc}>{desc}</div>
      <img
        className={classes.weatherCard__icon}
        src={`assets/${getIcon(main, desc, dayTime)}@2x.png`}
        alt="weather icon"
      />
      <div className={classes.weatherCard__temp}>
        {temp}
        <span>°C</span>
      </div>
      <div className={classes.weatherCard__wind}>
        humidity: <span>{humidity}%</span>
      </div>
      <div className={classes.weatherCard__wind}>
        wind speed: <span>{windSpeed} km/h</span>
      </div>
    </article>
  );
};

export default WeatherCard;
