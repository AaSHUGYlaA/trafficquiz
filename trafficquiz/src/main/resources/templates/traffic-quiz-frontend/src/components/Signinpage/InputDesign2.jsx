"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./InputDesign.module.css";
import LeftSection from "./LeftSection";
import SignUpForm from "./SignUpForm";
import {useNavigate} from "react-router-dom";

function InputDesign2() {
    const navigate = useNavigate();

        return (
            <main className={styles.container}>
                <LeftSection/>
                <div className={styles.rightSection}>
                    <div className={styles.formContainer}>
                        <h2 className={styles.welcomeHeading}>С Возвращением !</h2>
                        <p className={styles.loginText}>
                            <span>Уже есть аккаунт? </span>
                            <span className={styles.loginLink} onClick={() => navigate("/login")}>
          Войти
        </span>

                        </p>
                        <SignUpForm/>


                    </div>
                </div>
            </main>
        );
}

export default InputDesign2;
