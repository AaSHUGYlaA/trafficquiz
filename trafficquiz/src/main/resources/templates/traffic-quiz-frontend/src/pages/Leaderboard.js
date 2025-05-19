import { useEffect, useState } from "react";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/user-scores/leaderboard")
            .then((response) => response.json())
            .then((data) => setLeaderboard(data))
            .catch((error) => console.error("Error fetching leaderboard:", error));
    }, []);

    return (
        <section className="leaderboard">
            <h2>Global Leaderboard</h2>
            <div className="leaderboard-container">
                {leaderboard.length > 0 ? (
                    <ul>
                        {leaderboard.map((player, index) => (
                            <li key={index} className="leaderboard-entry">
                                <span className="rank">#{index + 1}</span>
                                <span className="name">{player.username}</span>
                                <span className="score">{player.totalScore} pts</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No leaderboard data available</p>
                )}
            </div>
        </section>
    );
};

export default Leaderboard;


