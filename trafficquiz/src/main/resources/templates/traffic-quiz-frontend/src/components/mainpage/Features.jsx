import React from "react";
import FeatureCard from "./FeatureCard";
import styles from "./Features.module.css";

const Features = () => {
  const features = [
    {
      title: "Интерактивный автодром",
      description:
          "Отрабатывайте навыки в реалистичной 3D-симуляции. Практикуйтесь в ситуациях, приближённых к реальным дорожным условиям.",
      metric: "50K+ активных пользователей",
      metricColor: "#FF6B6B",
    },
    {
      title: "Обучение с дополненной реальностью",
      description:
          "Революционные AR-функции позволяют изучать дорожные знаки и правила в увлекательной и наглядной форме с помощью телефона.",
      metric: "1M+ AR-сессий",
      metricColor: "#4ECDC4",
    },
    {
      title: "Адаптивное тестирование",
      description:
          "Система тестов поможет вам с подготовкой к тесту, предлагая вопросы.",
      metric: "2M+ решённых вопросов",
      metricColor: "#FFE66D",
    },
    {
      title: "Глобальный рейтинг",
      description:
          "Соревнуйтесь с учениками со всего мира, получайте достижения и отслеживайте свой прогресс в динамическом рейтинге.",
      metric: "100K+ участников в рейтинге",
      metricColor: "#FF8CC3",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
