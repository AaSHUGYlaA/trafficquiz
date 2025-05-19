import React from "react";
import styles from "./GeneratedDesign.module.css";

export function UserProgress() {
  return (
    <section className={styles.progressSection}>
      <div className={styles.levelBadge}>
        <div className={styles.levelIndicator}>Lvl 2</div>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Experience Points</span>
          <span className={styles.progressValue}>450/1000 XP</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
      </div>
    </section>
  );
}
