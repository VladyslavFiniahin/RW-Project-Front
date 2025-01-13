import React from "react";
import styles from "./ItalianCategory.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const categories = [
"Breakfasts",
"Main Dishes",
"Appetizers",
"Desserts",
"Salads",
"Vegan Dishes",
"Beverages",
];

const dishes = [
  { id: 1, name: "Granola with fruits", image: "/ItalianCategory/image1.png" },
  { id: 2, name: "Pasta with mushrooms", image: "/ItalianCategory/image2.png" },
  { id: 3, name: "Granola with fruits", image: "/ItalianCategory/image3.png" },
  { id: 4, name: "Pasta with mushrooms", image: "/ItalianCategory/image4.png" },
];

const ItalianCategory = () => {
  return (
    <>
    <Header/>
    <div className={styles.ItalianCategory}>
      <div>
      <div className={styles.categorytitle}>
        ITALIAN CUISINE
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
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default ItalianCategory;
