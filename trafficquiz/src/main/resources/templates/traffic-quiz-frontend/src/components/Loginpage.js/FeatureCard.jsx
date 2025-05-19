import React from "react";
import styles from "./InputDesign.module.css";

const FeatureCard = ({ title, features }) => {
  return (
    <article className={styles.featureCard}>
      <h3 className={styles.featureCardTitle}>{title}</h3>
      <ul className={styles.featureCardList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureCardListItem}>
            • {feature}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FeatureCard;
