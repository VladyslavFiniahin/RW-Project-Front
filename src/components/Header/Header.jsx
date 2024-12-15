import React from "react";
import styles from "./Header.module.css";

const Header = () => {


  return (
    <header className={styles.header_grid}>
      <div className={styles.item}>MAIN</div>
      <div className={styles.item}>CATEGORIES</div>
      <img src="../../../public/header/logo.svg" alt="logo" className={`${styles.item} ${styles.center_item}`}/>
      <div className={styles.item}>Item 4</div>
      <div className={styles.item}>Item 5</div>
    </header>
  )
}

export default Header;