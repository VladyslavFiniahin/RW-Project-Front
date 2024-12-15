import React from "react";
import styles from "./Mainpage.module.css";

const Mainpage = () => {


  return (
    <div className={styles.Mainpage}>
      <section className={styles.section2}>
        <div className={styles.left_section2}>
          <div className={styles.giant_text}>
            <div className={styles.red_giant_text}>
              GIANT
            </div>
            <div>
              DAMN DAMN
            </div>
            <div>
              TEXT TEXT
            </div>
          </div>
          <div className={styles.cards_section2}>
            <div className={styles.map_card}>
              <div className={styles.card_white_text}>
                UKRAINIAN MAP  
              </div>
            </div>
            <div className={styles.two_cards}>
              <div className={styles.categories_card_blue}>
                <div className={styles.two_card_white_text}>
                  CATEGORIES
                </div>                
              </div>
              <div className={styles.categories_card_yellow}>
                <div className={styles.two_card_white_text}>
                    CATEGORIES
                </div> 
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_section2}>
          <h1>Giant avocado...</h1>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.red_section_wrapper}>
          <div className={styles.left_red_section}>
            <div className={styles.big_random_text}>
              RANDOM
            </div>
            <div className={styles.red_section_smaller_text}>
              UKRAINIAN MAP UKRAINIAN MAP UKRAINIAN MAP UKRAINIAN MAP 
            </div>
            <div className={styles.yellow_random_button}>
              RANDOM
            </div>

          </div>
          <div className={styles.right_red_section}>

          </div>
        </div>
        <img className={styles.shit} src="../../../public/header/randomContainer1.jpg" alt="food" />
      </section>
    </div>
  )
}

export default Mainpage;