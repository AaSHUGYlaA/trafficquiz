import React from "react";
import styles from "./FeatureCard.module.css";
import mainpageim from "./arfeature.jpg"
import auto from "./auto.jpg"

const FeatureCard = ({ title, description, metric, metricColor, images }) => {
  return (
    <article className={styles.featureCard}>
      <div className={styles.indicator} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.metricContainer}>
          <svg
            className={styles.starIcon}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24074 2.34166C7.48074 1.60486 8.52314 1.60486 8.76234 2.34166L9.61834 4.97526C9.67064 5.13565 9.7723 5.27541 9.9088 5.37455C10.0453 5.47369 10.2096 5.52714 10.3783 5.52726H13.1479C13.9231 5.52726 14.2447 6.51926 13.6183 6.97526L11.3783 8.60246C11.2416 8.70169 11.1397 8.84167 11.0874 9.00234C11.0351 9.16302 11.035 9.33613 11.0871 9.49686L11.9431 12.1305C12.1831 12.8673 11.3391 13.4809 10.7111 13.0249L8.47114 11.3977C8.33451 11.2985 8.16999 11.245 8.00114 11.245C7.83229 11.245 7.66778 11.2985 7.53114 11.3977L5.29114 13.0249C4.66394 13.4809 3.82074 12.8673 4.05994 12.1305L4.91594 9.49686C4.96808 9.33613 4.96799 9.16302 4.91568 9.00234C4.86336 8.84167 4.76152 8.70169 4.62474 8.60246L2.38554 6.97606C1.75914 6.52006 2.08154 5.52806 2.85594 5.52806H5.62474C5.79358 5.52811 5.9581 5.47473 6.09476 5.37558C6.23142 5.27643 6.3332 5.13658 6.38554 4.97606L7.24154 2.34246L7.24074 2.34166Z"
              fill="black"
            />
          </svg>
          <span className={styles.metric} style={{ color: metricColor }}>
            {metric}
          </span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={auto}
          alt=""
          className={styles.featureImage1}
        />
        <img
          src={mainpageim}
          alt=""
          className={styles.featureImage2}
        />
        <div className={styles.dots}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </div>
    </article>
  );
};

export default FeatureCard;
