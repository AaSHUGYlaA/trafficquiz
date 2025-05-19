"use client";
import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AIDA Чемпионы</h1>
      {/*<div className={styles.seasonBadge}> Season 3 Active</div>*/}
      <div className={styles.controls}>
        {/*<button className={styles.controlButton}>Светлый режим</button>*/}
        {/*<button className={styles.controlButton}>Daily Challenges</button>*/}
      </div>
    </header>
  );
}

export default Header;
