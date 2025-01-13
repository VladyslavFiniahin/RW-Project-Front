import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default Card;
