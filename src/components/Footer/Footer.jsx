import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  
  return (
    <div className={styles.Footer}>
      <div className={styles.links_left}>
        <div>UKAINIAN MAP</div>
        <div>UKAINIAN MAP</div>
        <div>UKAINIAN MAP</div>
      </div>
      <img src="/header/logo.svg" className={styles.logo} alt="logo" />
      <div className={styles.links_right}>
        <div>UKAINIAN MAP</div>
        <div>UKAINIAN MAP</div>
        <div>UKAINIAN MAP</div>
      </div>
    </div>
  )
}

export default Footer;