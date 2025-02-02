import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  
  return (
    <div className={styles.Footer}>
      <div className={styles.links_left}>
        <div>Social Media:</div>
        <Link to="https://www.facebook.com/"><img src="/Footer/facebook.svg" className={styles.social} alt="facebook" /></Link>
        <Link to="https://x.com/"><img src="/Footer/twitter.svg" className={styles.social} alt="twitter" /></Link>
        <Link to="https://www.instagram.com/"><img src="/Footer/instagram.svg" className={styles.social} alt="instagram" /></Link>
        <div>Email:</div>
        <div>amnyamteam@gmail.com</div>
      </div>
      <img src="/Footer/footer.svg" className={styles.logo} alt="logo" />
      <div className={styles.links_right}>
        <Link className={styles.link} to="/">Home</Link><br/>
        <Link className={styles.link} to="/categories">Categories</Link><br/>
        <Link className={styles.link} to="/map">Map</Link><br/>
        <Link className={styles.link} to="/about">About Us</Link><br/>
      </div>
    </div>
  )
}

export default Footer;