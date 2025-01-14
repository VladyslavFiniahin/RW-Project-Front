import React, { useState } from "react";
import styles from "./CategorySlider.module.css";
import { Link } from "react-router-dom";

const CategorySlider = () => {
    const data = [
        { img: "/Categories/american.svg", name: "American", link: "/categories/american" },
        { img: "/Categories/chinese.svg", name: "Chinese", link: "/categories/chinese" },
        { img: "/Categories/french.svg", name: "French", link: "/categories/french" },
        { img: "/Categories/greek.svg", name: "Greek", link: "/categories/greek" },
        { img: "/Categories/indian.svg", name: "Indian", link: "/categories/indian" },
        { img: "/Categories/italian.svg", name: "Italian", link: "/categories/italian" },
        { img: "/Categories/japanese.svg", name: "Japanese", link: "/categories/japanese" },
        { img: "/Categories/korean.svg", name: "Korean", link: "/categories/korean" },
        { img: "/Categories/mexican.svg", name: "Mexican", link: "/categories/mexican" },
        { img: "/Categories/spanish.svg", name: "Spanish", link: "/categories/spanish" },
        { img: "/Categories/turkish.svg", name: "Turkish", link: "/categories/turkish" },
        { img: "/Categories/ukrainian.svg", name: "Ukranian", link: "/categories/ukrainian" },
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
                        <Link to={item.link} rel="noopener noreferrer" className={styles.moreButton}>
                            <span className={styles.arrow}>&#8599;</span>
                        </Link>
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