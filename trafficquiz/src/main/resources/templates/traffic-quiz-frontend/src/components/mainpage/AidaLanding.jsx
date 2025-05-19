"use client";
import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import styles from "./AidaLanding.module.css";

const AidaLanding = () => {
  return (
    <main className={styles.mainContainer}>
      <Hero />
      <Features />
      <CallToAction />
      {/*<Footer />*/}
    </main>
  );
};

export default AidaLanding;
