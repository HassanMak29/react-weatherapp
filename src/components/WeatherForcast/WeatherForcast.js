import React, { useState } from "react";
import classes from "./WeatherForcast.module.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import Map from "../Map/Map";

const WeatherForcast = ({ weatherData, location, lat, lon }) => {
  const [timeOfDay, setTimeOfDay] = useState("morning");

  let time;
  if (timeOfDay === "midnight") time = "00:00:00";
  if (timeOfDay === "before dawn") time = "03:00:00";
  if (timeOfDay === "dawn") time = "06:00:00";
  if (timeOfDay === "morning") time = "09:00:00";
  if (timeOfDay === "noon") time = "12:00:00";
  if (timeOfDay === "evening") time = "18:00:00";
  if (timeOfDay === "night") time = "21:00:00";

  let dayTime;
  if (time === "00:00:00" || time === "03:00:00" || time === "21:00:00") {
    dayTime = "night";
  } else {
    dayTime = "day";
  }

  let todaysWeather;
  let allDaysWeather;
  if (weatherData.list) {
    todaysWeather = weatherData.list[0];
    const otherDaysWeather = weatherData.list.filter((el) =>
      el.dt_txt.includes(time)
    );
    if (
      todaysWeather.dt_txt.includes(time) &&
      !otherDaysWeather.includes(todaysWeather)
    ) {
      allDaysWeather = [todaysWeather, ...otherDaysWeather];
    } else {
      allDaysWeather = otherDaysWeather;
    }
  }

  return (
    <>
      <div className={classes.weatherForcast__selectBox}>
        <select
          className={classes.weatherForcast__select}
          name="time"
          value={timeOfDay}
          onChange={(e) => setTimeOfDay(e.target.value)}
        >
          <option value="midnight">Midnight</option>
          <option value="before dawn">Before dawn</option>
          <option value="dawn">Dawn</option>
          <option value="morning">Morning</option>
          <option value="noon">Noon</option>
          <option value="evening">Evening</option>
          <option value="night">night</option>
        </select>
      </div>
      <h2 className={classes.weatherForcast__location}>{location}</h2>
      <div className={classes.weatherForcast}>
        {allDaysWeather &&
          allDaysWeather.map((dayWeather, i) => (
            <WeatherCard
              key={i}
              dayWeather={dayWeather}
              date={dayWeather.dt_txt}
              dayTime={dayTime}
            />
          ))}
      </div>
      <p className={classes.weatherForcast__poweredby}>
        Powered by{" "}
        <a href="https://openweathermap.org/api">openweathermap.org</a>
      </p>
      <Map lat={lat} lon={lon} />
    </>
  );
};

export default WeatherForcast;
