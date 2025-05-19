import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f928a12c1a39274254010ea8cdceb80af7b77776"
            alt="AIDA Logo"
            className={styles.footerLogo}
          />
          <h2 className={styles.brandName}>AIDA</h2>
          <p className={styles.brandDescription}>
            AIDA is your ultimate companion for mastering traffic rules and
            becoming a confident driver. Learn through interactive experiences
            and join our global community of successful learners.
          </p>
          <div className={styles.socialLinks}>
            <button className={styles.socialButton}>Twitter</button>
            <button className={styles.socialButton}>Facebook</button>
            <button className={styles.socialButton}>Instagram</button>
            <button className={styles.socialButton}>LinkedIn</button>
          </div>
        </div>

        <nav className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#help">Help Center</a>
              </li>
              <li>
                <a href="#safety">Safety Center</a>
              </li>
              <li>
                <a href="#guidelines">Community Guidelines</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/*<div className={styles.linkColumn}>*/}
          {/*  <h3>Legal</h3>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <a href="#terms">Terms of Service</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#privacy">Privacy Policy</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#cookies">Cookie Policy</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#licenses">Licenses</a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </nav>
      </div>

      {/*<div className={styles.footerBottom}>*/}
      {/*  <p className={styles.copyright}>© 2025 AIDA. </p>*/}
      {/*  <p className={styles.status}></p>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
