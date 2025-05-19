import React from "react";
import styles from "./InputDesign.module.css";
import LoginForm from "./LoginForm";
import FeatureShowcase from "./FeatureShowcase";

function InputDesign() {
  return (
    <main className={styles.container}>
      <LoginForm />
      <FeatureShowcase />
    </main>
  );
}

export default InputDesign;
