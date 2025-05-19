import React from "react";
import styles from "./InputDesign.module.css";

const StatCard = ({ icon, title, subtitle, iconBgColor }) => {
  return (
    <div className={styles.statCard}>
      <div className={`${styles.iconContainer} ${styles[iconBgColor]}`}>
        {icon}
      </div>
      <div>
        <p className={styles.statTitle}>{title}</p>
        <p className={styles.statSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;
