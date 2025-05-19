import React from "react";
import styles from "./GeneratedDesign.module.css";

export function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/94ba4a14353a4eaaa3e430e54993f19e/9f7100402e30265a974226496b10796e95510a222951a208dca45ab4f033479c?placeholderIfAbsent=true"
        alt="Search icon"
        className={styles.searchIcon}
      />
      <input
        type="text"
        placeholder="Search quizzes..."
        className={styles.searchInput}
      />
    </div>
  );
}
