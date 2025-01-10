import React from "react";
import styles from "./ItalianCategory.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const categories = [
  "Сніданки",
  "Основні Страви",
  "Закуски",
  "Десерти",
  "Салати",
  "Веганські Страви",
  "Напої",
];

const dishes = [
  { id: 1, name: "Гранола з фруктами", image: "/ItalianCategory/image1.png" },
  { id: 2, name: "Паста з грибами", image: "/ItalianCategory/image2.png" },
  { id: 3, name: "Гранола з фруктами", image: "/ItalianCategory/image3.png" },
  { id: 4, name: "Паста з грибами", image: "/ItalianCategory/image4.png" },
];

const ItalianCategory = () => {
  return (
    <>
    <Header/>
    <div className={styles.ItalianCategory}>
      <div>
      <div className={styles.categorytitle}>
        ІТАЛІЙСЬКА КУХНЯ
        </div>
        <nav>
          {categories.map((category, index) => (
            <a key={index} >
              {category}
            </a>
          ))}
        </nav>
      </div>

      <main>
        <div className={styles.track}>
          {dishes.map((dish) => (
            <div className={styles.item} key={dish.id}>
              <img src={dish.image} alt={dish.name} />
                <p>{dish.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.track}>
          {dishes.map((dish) => (
            <div className={styles.item} key={dish.id}>
              <img src={dish.image} alt={dish.name} />
                <p>{dish.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default ItalianCategory;
