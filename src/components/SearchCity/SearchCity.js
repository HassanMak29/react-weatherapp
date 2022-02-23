import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./SearchCity.module.css";

const SearchCity = ({ setLat, setLon, setLocation }) => {
  const [city, setCity] = useState("");

  const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=44eeb0863b7b878491c01518d820a7af`;

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const { data } = await axios.get(geocodingUrl);
        setLon(data[0].lon);
        setLat(data[0].lat);
        setLocation(`${data[0].name}, ${data[0].country}`);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCity();
  }, [geocodingUrl, setLat, setLocation, setLon]);

  return (
    <form className={classes.form}>
      <div className={classes.form__labelInput}>
        <label className={classes.form__label} htmlFor="city"></label>
        <input
          className={classes.form__input}
          id="city"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button className={classes.form__btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchCity;
