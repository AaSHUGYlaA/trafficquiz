import React from "react";
import styles from "./Hero.module.css";
import mainpageim from "./mainpage.png"

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <h2 className={styles.heroTitle}>
          {/*Master Traffic Rules with AIDA - the best way to start*/}
            Освой правила дорожного движения с AIDA — твой лучший путь к безопасности
        </h2>
        <p className={styles.heroDescription}>
            Наслаждайтесь интерактивным обучением c адаптивными тестами. Совершенствуйте свои знания в любое время,
            везде.
        </p>
        <div className={styles.buttonGroup}>
          {/*<button className={styles.demoButton}>Попробовать демо</button>*/}
          {/*<button className={styles.videoButton}>Смотреть видео</button>*/}
        </div>
      </div>
      <img
        src={mainpageim}
        alt="AIDA Learning Platform Interface"
        className={styles.heroImage}
      />
    </section>
  );
};

export default Hero;
