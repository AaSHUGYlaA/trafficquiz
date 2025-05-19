"use client";
import React from "react";
import Header from "./Header";
import DailyProgress from "./DailyProgress";
import QuizSection from "./QuizSection";
import styles from "./ChampionsDashboard.module.css";

function ChampionsDashboard() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />
      <main className={styles.dashboard}>
        <Header />
        <DailyProgress />
        <QuizSection />
      </main>
    </>
  );
}

export default ChampionsDashboard;
