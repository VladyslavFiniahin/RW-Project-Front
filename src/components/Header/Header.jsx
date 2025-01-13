import React from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom"

const Header = () => {


  return (
    <div className={styles.header}>
      <div className={styles.group1}>
        <div className={styles.g1_item1}><Link className={styles.link} to="/">Home</Link></div>
        <div className={styles.g1_item2}><Link className={styles.link} to="/categories">Categories</Link></div>
      </div>
      <img src="/header/logo.svg" alt="logoo" className={styles.center_img}/>
      <div className={styles.group2}>
        <div className={styles.g2_item1}>
          <Link className={styles.link} to="/map">
            Map 
          </Link>
        </div>
        <div className={styles.g2_item1}>
          <Link className={styles.link} to="/about">
            About us
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/header/search.svg" className={styles.search_img} alt="search" />
        <Link className={styles.link} to="/profile">
          <img src="/header/profile.svg" className={styles.profile_img} alt="profile" />
        </Link>
      </div>
    </div>
  )
}

export default Header;