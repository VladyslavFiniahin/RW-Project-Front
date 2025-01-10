import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  
  return (
    <div className={styles.Footer}>
      <div className={styles.links_left}>
        <div>соціальні мережі:</div>
        <div>кнопки на соц мережі</div>
        <div>електронна пошта:</div>
        <div>amnyamteam@gmail.com</div>
      </div>
      <img src="/header/logo.svg" className={styles.logo} alt="logo" />
      <div className={styles.links_right}>
        <div>Дізнатися більше</div>
        <div>Про Нас</div>

      </div>
    </div>
  )
}

export default Footer;