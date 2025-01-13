import React from "react";
import styles from "./Categories.module.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import CategorySlider from "../../components/CategorySlider/CategorySlider";

const Categories = () => {


    return (
        <>
        <div className={styles.Categories}>
        <Header/>
        <div className={styles.categorytitle}>
        CATEGORIES
        </div>
        <div className={styles.section}>
        <CategorySlider/>
        </div>
        <Footer/>
        </div>
        
        </>
    )
  }
  
  export default Categories;