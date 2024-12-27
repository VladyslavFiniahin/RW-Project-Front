import React from "react";
import styles from "./Header.module.css";

const Header = () => {


  return (
    <div className={styles.header}>
      <div className={styles.group1}>
        <div className={styles.g1_item1}>MAIN</div>
        <div className={styles.g1_item2}>CATEGORIES</div>
      </div>
      <img src="header/logo.svg" alt="logoo" className={styles.center_img}/>
      <div className={styles.group2}>
        <div className={styles.g2_item1}>MAP</div>
        <div className={styles.g2_item1}>OTHER</div>
      </div>
      <div className={styles.right}>
        <img src="/header/search.svg" className={styles.search_img} alt="search" />
        <img src="/header/profile.svg" className={styles.profile_img} alt="profile" />
      </div>
    </div>
  )
}

export default Header;