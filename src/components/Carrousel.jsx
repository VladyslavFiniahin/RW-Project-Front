import { React, useState, useEffect } from "react";
import styles from "./carrousel.module.css";

const Carrousel = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
        try {
            const response = await fetch('http://94.231.178.180:3001/api/recipes/getlast20');
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data);
            console.log("fetched recipes:\n\n", data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchRecipes();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = recipes.length;
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
            items.push(recipes[(currentIndex + i) % totalItems]);
        }
        return items;
    };
    
    if (loading) {
        return <p>Loading recipes...</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Last Recepies
            </div>
            <div className={styles.carrousel}>
                <div className={styles.track}>
                    {getVisibleItems().map((item, index) => (
                        <div className={styles.item} key={index}>
                            <img src={item.image_url} alt={item.title} />
                            <p>{item.title}</p>
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
