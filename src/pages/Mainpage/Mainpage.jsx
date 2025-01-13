import React from "react";
import styles from "./Mainpage.module.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const Mainpage = () => {
  return (
    <>
      <div className={styles.Mainpage}>
        <Header />
        <section className={styles.heroSection}>
          <div className={styles.textWrapper}>
            <h1 className={styles.mainTitle}>
              YOUR <span className={styles.underline}>CULINARY</span>
              <br />
              ASSISTANT
            </h1>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/mainpage/dump1.png"
              alt="dump"
              className={styles.heroImage}
            />
          </div>
          <p className={styles.subtitle}>
            Discover recipes, share yours, explore the world's flavors
          </p>
        </section>

        <section className={styles.section2}>
          <div className={styles.left_section2}>
            <div className={styles.giant_text}>
              <div className={styles.red_giant_text}>Ready</div>
              <div>To explore?</div>
            </div>
            <div className={styles.cards_section2}>
              <div className={styles.map_card}>
                <img src="/mainpage/arrow.svg" alt="arrow" className={styles.arrow} />
                <div className={styles.card_white_text}>UKRAINIAN MAP</div>
              </div>
              <div className={styles.two_cards}>
                <div className={styles.categories_card_blue}>
                  <img src="/mainpage/arrow.svg" alt="arrow" className={styles.arrow2} />
                  <div className={styles.two_card_white_text}>CATEGORIES</div>
                </div>
                <div className={styles.categories_card_yellow}>
                  <img src="/mainpage/arrow.svg" alt="arrow" className={styles.arrow2} />
                  <div className={styles.two_card_white_text}>CATEGORIES</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_section2}>
            <img src="/mainpage/dump2.png" alt="dump2"></img>
          </div>
        </section>

        <section className={styles.section3}>
          <div className={styles.red_section_wrapper}>
            <div className={styles.left_red_section}>
              <div className={styles.big_random_text}>RANDOM</div>
              <div className={styles.red_section_smaller_text}>
                Can’t decide? Let us surprise you!
              </div>
              <div className={styles.yellow_random_button}>Pick a Random Recipe</div>
            </div>
            <div className={styles.right_red_section}>
              <div className={styles.cardsContainer}>
                <div className={`${styles.card} ${styles.cardLeft}`}>
                  <Card image="/mainpage/randimage1.jfif" />
                </div>
                <div className={`${styles.card} ${styles.cardCenter}`}>
                  <Card image="/mainpage/randimage2.jfif" />
                </div>
                <div className={`${styles.card} ${styles.cardRight}`}>
                  <Card image="/mainpage/randimage3.jfif" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Mainpage;