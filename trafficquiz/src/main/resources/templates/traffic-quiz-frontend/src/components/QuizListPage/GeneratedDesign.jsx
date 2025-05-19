"use client";
import React from "react";
import styles from "./GeneratedDesign.module.css";
import { QuizHeader } from "./QuizHeader";
import { UserProgress } from "./UserProgress";
import { SearchBar } from "./SearchBar";
import { QuizCard } from "./QuizCard";

function GeneratedDesign() {
  return (
    <main className={styles.generatedDesign}>
      <section className={styles.rectangle}>
        <div className={styles.contentWrapper}>
          <QuizHeader />
          <UserProgress />
          <SearchBar />

          <section className={styles.quizList}>
            <QuizCard
              title="Road Signs Basics"
              xp="+250 XP"
              questions="8/10 Questions"
              duration="20 min"
              buttonText="Continue"
            />

            <QuizCard
              title="Traffic Signals"
              xp="+350 XP"
              questions="0/15 Questions"
              duration="25 min"
              buttonText="Start"
            />

            <QuizCard
              title="Right of Way Rules"
              xp="+300 XP"
              questions="0/12 Questions"
              duration="22 min"
              buttonText="Start"
            />
          </section>
        </div>
      </section>
    </main>
  );
}

export default GeneratedDesign;
