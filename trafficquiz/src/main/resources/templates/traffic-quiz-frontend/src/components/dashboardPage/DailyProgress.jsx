import React, {useEffect, useState} from "react";
import styles from "./DailyProgress.module.css";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/progress';
export const fetchDailyProgress = (userId) => {
    return axios.get(`${API_BASE_URL}/daily/${userId}`);
};

export const fetchStreakCount = (userId) => {
    return axios.get(`${API_BASE_URL}/streak/${userId}`);
};

export const fetchUserRank = (userId) => {
    return axios.get(`${API_BASE_URL}/rank/${userId}`);
};

const DailyProgress = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [dailyProgress, setDailyProgress] = useState([]);
    const [streak, setStreak] = useState(0);
    const [rank, setRank] = useState({position: 0, percentile: 0});



    useEffect(() => {
        if (userId) {
            fetchDailyProgress(userId)
                .then(res => setDailyProgress(res.data))
                .catch(err => console.error('Error fetching daily progress:', err));

            fetchStreakCount(userId)
                .then(res => setStreak(res.data))
                .catch(err => console.error('Error fetching streak:', err));

            fetchUserRank(userId)
                .then(res => setRank(res.data))
                .catch(err => console.error('Error fetching rank:', err));
        }
    }, [userId]);


    return (

        <section className={styles.progressSection}>


            <h2 className={styles.title}>Прогресс ежедневного задания</h2>

            {/* Fill bar based on completed days out of total (e.g., 3/5) */}
            {/*<div className={styles.progressBar}>*/}
            {/*    <div*/}
            {/*        className={styles.progressFill}*/}
            {/*        style={{ width: `${(dailyProgress.filter(p => p.completed).length / dailyProgress.length) * 100}%` }}*/}
            {/*    />*/}
            {/*</div>*/}

            <div className={styles.progressCount}>
                {dailyProgress.filter(p => p.completed).length}/{dailyProgress.length}
            </div>

            <div className={styles.statsGrid}>
                <article className={styles.statCard}>
                    <h3 className={styles.statTitle}>Текущая серия</h3>
                    <p className={styles.statValue}>{streak} дней</p>
                </article>

                <article className={styles.statCard}>
                    <h3 className={styles.statTitle}>Ранг</h3>
                    <p className={styles.statValue}>#{rank.position}</p>
                </article>
            </div>
        </section>
    );


}
export default DailyProgress;







