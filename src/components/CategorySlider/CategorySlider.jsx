import React, { useState, useEffect } from "react";
import styles from "./CategorySlider.module.css";
import { Link } from "react-router-dom";

const CategorySlider = () => {
    const data = [
        { img: "/Categories/ukrainian.svg", name: "Ukrainian", link: "/categories/ukrainian" },
        { img: "/Categories/italian.svg", name: "Italian", link: "/categories/italian" },
        { img: "/Categories/american.svg", name: "American", link: "/categories/american" },
        { img: "/Categories/chinese.svg", name: "Chinese", link: "/categories/chinese" },
        { img: "/Categories/french.svg", name: "French", link: "/categories/french" },
        { img: "/Categories/greek.svg", name: "Greek", link: "/categories/greek" },
        { img: "/Categories/indian.svg", name: "Indian", link: "/categories/indian" },
        { img: "/Categories/japanese.svg", name: "Japanese", link: "/categories/japanese" },
        { img: "/Categories/korean.svg", name: "Korean", link: "/categories/korean" },
        { img: "/Categories/mexican.svg", name: "Mexican", link: "/categories/mexican" },
        { img: "/Categories/spanish.svg", name: "Spanish", link: "/categories/spanish" },
        { img: "/Categories/turkish.svg", name: "Turkish", link: "/categories/turkish" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth <= 480) {
                setVisibleItems(1);
            } else if (window.innerWidth <= 768) {
                setVisibleItems(2);
            } else {
                setVisibleItems(4);
            }
        };

        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    const totalItems = data.length;

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
                        <Link 
                            to={item.link} 
                            rel="noopener noreferrer" 
                            className={styles.moreButton}  
                            style={{ backgroundColor: index % 2 === 0 ? "#7A90FF" : "#FFD753" }}
                        >
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
