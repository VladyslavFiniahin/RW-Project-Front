import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  
  return (
    <div className={styles.Footer}>
      <div className={styles.links_left}>
        <div>Social Media</div>
        <img src="/Footer/facebook.svg" className={styles.social} alt="facebook" />
        <img src="/Footer/twitter.svg" className={styles.social} alt="twitter" />
        <img src="/Footer/instagram.svg" className={styles.social} alt="instagram" />
        <div>Email:</div>
        <div>amnyamteam@gmail.com</div>
      </div>
      <img src="/Footer/footer.svg" className={styles.logo} alt="logo" />
      <div className={styles.links_right}>
        <div>Home</div>
        <div>Categories</div>
        <div>Map</div>
        <div>About Us</div>

      </div>
    </div>
  )
}

export default Footer;