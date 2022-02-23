import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intv = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intv);
    };
  }, []);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayOfTheWeek = date.getDay();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, 0);
  const mins = date.getMinutes().toString().padStart(2, 0);
  const secs = date.getSeconds().toString().padStart(2, 0);

  return (
    <header className={classes.header}>
      <div className={classes.header__head}>
        <img
          className={classes.header__logo}
          src="assets/dataimpact-logo.jpeg"
          alt="data impact logo"
        />
        <span className={classes.header__title}>Data Impact Weather App</span>
      </div>
      <div className={classes.header__info}>
        <span
          className={classes["header__info--date"]}
        >{`${weekDays[dayOfTheWeek]},
         ${months[month]} ${day} ${year}`}</span>
        <span
          className={classes["header__info--time"]}
        >{`${hours}:${mins}:${secs}`}</span>
      </div>
    </header>
  );
};

export default Header;
