"use client";
import React from "react";
import styles from "./NavigationButton.module.css";

const NavigationButton = ({ onClick, disabled, variant, children }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
