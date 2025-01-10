import React, { useState } from "react";
import styles from "./CategorySlider.module.css";

const CategorySlider = () => {
    const data = [
        { img: "./Categories/1.png", name: "італьйська кухня", link: "#" },
        { img: "./Categories/2.png", name: "французька кухня", link: "#" },
        { img: "./Categories/3.png", name: "іспанська кухня", link: "#" },
        { img: "./Categories/4.png", name: "японська кухня", link: "#" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = data.length;
    const visibleItems = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < visibleItems; i++) {
            items.push(data[(currentIndex + i) % totalItems]);
        }
        return items;
    };

    return (
        <div className={styles.carrousel}>
            <div className={styles.track}>
                {getVisibleItems().map((item, index) => (
                    <div className={styles.item} key={index}>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.moreButton}>
                            <span className={styles.arrow}>&#8599;</span>
                        </a>
                    </div>
                ))}
            </div>

            <button className={`${styles.carrouselButton} ${styles.left}`} onClick={prevSlide}>
                &lt;
            </button>
            <button className={`${styles.carrouselButton} ${styles.right}`} onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default CategorySlider;