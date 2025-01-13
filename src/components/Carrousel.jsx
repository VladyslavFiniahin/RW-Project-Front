import React, { useState } from "react";
import styles from "./carrousel.module.css";

const Carrousel = () => {
    const data = [
        { img: "/LastRecepies/1.png", name: "Pasta with mushrooms", link: "#" },
        { img: "/LastRecepies/2.png", name: "Pancakes with fruits", link: "#" },
        { img: "/LastRecepies/3.png", name: "Pasta with shrimps", link: "#" },
        { img: "/LastRecepies/4.png", name: "Casseroles", link: "#" },
        { img: "/LastRecepies/5.png", name: "Pancakes with eggplant", link: "#" },
        { img: "/LastRecepies/6.png", name: "Fried potatoes", link: "#" },
        { img: "/LastRecepies/7.png", name: "Oatmeal pancake", link: "#" },
        { img: "/LastRecepies/8.png", name: "Salmon", link: "#" },
        { img: "/LastRecepies/9.png", name: "Oatmeal", link: "#" },
        { img: "/LastRecepies/10.png", name: "Cheese pancakes", link: "#" },
        { img: "/LastRecepies/11.png", name: "Rice with vegetables", link: "#" },
        { img: "/LastRecepies/12.png", name: "Vatrushky", link: "#" },
        { img: "/LastRecepies/13.png", name: "Caesar", link: "#" },
        { img: "/LastRecepies/14.png", name: "Grandmother's pancakes", link: "#" },
        { img: "/LastRecepies/15.png", name: "Homemade pizza", link: "#" },
        { img: "/LastRecepies/16.png", name: "Manty", link: "#" },
        { img: "/LastRecepies/17.png", name: "Khachapuri", link: "#" },
        { img: "/LastRecepies/18.png", name: "Homemade croissants", link: "#" },
        { img: "/LastRecepies/19.png", name: "Greek salad", link: "#" },
        { img: "/LastRecepies/20.png", name: "Granola with fruits", link: "#" },
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
        <div className={styles.container}>
            <div className={styles.title}>
                Last Recepies
            </div>
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
        </div>
    );
};

export default Carrousel;
