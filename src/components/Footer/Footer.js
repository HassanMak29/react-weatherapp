import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span className={classes.footer__copyright}>
        &copy; 2022 Abdelmounaim Makhloufi
      </span>
      <div className={classes.footer__info}>
        <span className={classes["footer__info--title"]}>
          Data Impact Weather App.
        </span>
        <img
          className={classes["footer__info--img"]}
          src="/assets/dataimpact-logo.jpeg"
          alt="data impact logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
