"use client";
import React from "react";
import styles from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!localStorage.getItem("authToken");

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/*<img*/}
          {/*    src=""*/}
          {/*    alt="AIDA Logo"*/}
          {/*    className={styles.logo}*/}
          {/*/>*/}
          <h1 className={styles.brandName}>AIDA</h1>
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li><a href="/main" className={styles.navLink}>Главная</a></li>
            <li><a href="/quizzes" className={styles.navLink}>Тесты</a></li>
            {/*<li><a href="/leaderboard" className={styles.navLink}>Таблица лидеров</a></li>*/}
            {/*<li><a href="#about" className={styles.navLink}>О нас</a></li>*/}
            <li><a href="/dashboard" className={styles.navLink}>Панель управления</a></li>
          </ul>
        </nav>

        <div className={styles.authButtons}>
          {isAuthenticated && user ? (
              <div className={styles.userInfo}>
                {user.avatar && (
                    <img src={user.avatar} alt="Avatar" className={styles.avatar} />
                )}
                <span className={styles.signInButton}>Добро пожаловать, {user.username}!</span>
                <button className={styles.getStartedButton} onClick={handleLogout}>
                  Logout
                </button>
              </div>
          ) : (
              <>
                <button className={styles.signInButton} onClick={handleLogin}>
                  Войти
                </button>
                <button className={styles.getStartedButton} onClick={handleGetStarted}>
                    Начать работу!
                </button>
              </>
          )}
        </div>
      </header>
  );
};

export default Header;
