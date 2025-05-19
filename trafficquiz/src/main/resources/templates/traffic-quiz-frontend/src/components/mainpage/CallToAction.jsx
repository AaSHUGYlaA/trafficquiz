import React from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>Готовы начать обучение?</h2>
      <p className={styles.description}>
          Присоединяйтесь к тысячам пользователей, изучающих правила дорожного движения с AIDA
      </p>
      <button className={styles.ctaButton}>Начать прямо сейчас</button>
    </section>
  );
};

export default CallToAction;
