import React from "react";
import styles from "./InputDesign.module.css";
import FeatureCard from "./FeatureCard";

const FeatureShowcase = () => {
  const features = [
    {
      title: "Теоретические тесты",
      items: [
        "Вопросы с выбором ответа",
        "Объяснение правил дорожного движения",
        "Регулярные обновления",
      ],
    },
    {
      title: "Дорожные знаки",
      items: ["Предупреждающие знаки", "Регулирующие знаки", "Информационные знаки"],
    },
    {
      title: "Практические тесты",
      items: ["Экзамены на время", "Отслеживание баллов", "Анализ ошибок"],
    },
    {
      title: "Учебные материалы",
      items: ["PDF-руководства", "Краткие справочники", "Практические листы"],
    },
  ];

  return (
    <section className={styles.featureSection}>
      <header className={styles.featureHeader}>
        <h1 className={styles.featureTitle}>Изучение правил дорожного движения</h1>
        <p className={styles.featureSubtitle}>
          Простые и эффективные учебные тесты
        </p>
      </header>

      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            features={feature.items}
          />
        ))}
      </div>
      {/*<div className={styles.beginStudyingContainer}>*/}
      {/*  <button className={styles.beginStudyingButton}>Начать</button>*/}
      {/*</div>*/}
    </section>
  );
};

export default FeatureShowcase;
