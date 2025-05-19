import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user }) => {
    const navigate = useNavigate();
    const [userStats, setUserStats] = useState({ quizzesCompleted: 5, progress: 70, xp: 1200, level: 3 });
    const [milestones, setMilestones] = useState([
        { id: 1, title: "🚦 Learn Road Signs", completed: true },
        { id: 2, title: "📖 Master Traffic Rules", completed: false },
        { id: 3, title: "🚗 Take Driving Simulations", completed: false },
        { id: 4, title: "📝 Attempt Mock Driving Test", completed: false },
        { id: 5, title: "🏁 Ready for Real Driving Test!", completed: false },
    ]);

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning! ☀️";
        if (hour < 18) return "Good afternoon! 🌤️";
        return "Good evening! 🌙";
    };

    useEffect(() => {
        setTimeout(() => {
            setUserStats(prevStats => ({ ...prevStats, quizzesCompleted: 7, progress: 80 }));
        }, 1000);
    }, []);

    const toggleMilestone = (id) => {
        setMilestones(milestones.map(m => m.id === id ? { ...m, completed: !m.completed } : m));
    };

    return (
        <div className="dashboard-container">
            <h2>🚗 Welcome, {user?.username || "Road Explorer"}!</h2>
            <p className="greeting-message">{getGreeting()} Let's hit the road to success! 🏆</p>

            <div className="dashboard-grid">
                {/* XP & Level System */}
                <div className="dashboard-card xp-card">
                    <h3>🏆 Level {userStats.level}</h3>
                    <p>🔥 XP: {userStats.xp}</p>
                    <p>Complete quizzes and challenges to level up!</p>
                </div>

                {/* Progress Bar */}
                <div className="dashboard-card stats">
                    <h3>📊 Your Progress</h3>
                    <p>You've completed <span className="stats-highlight">{userStats.quizzesCompleted}</span> quizzes!</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${userStats.progress}%` }}></div>
                    </div>
                    <p className="progress-text">You're {userStats.progress}% ready for your test! 🚀</p>
                </div>

                {/* Learning Path */}
                <div className="dashboard-card goal-tracker">
                    <h3>🎯 Your Learning Path</h3>
                    <ul className="milestone-list">
                        {milestones.map(m => (
                            <li key={m.id} className={`milestone ${m.completed ? "completed" : ""}`} onClick={() => toggleMilestone(m.id)}>
                                {m.completed ? "✅" : "⬜"} {m.title}
                            </li>
                        ))}
                    </ul>
                    <p className="goal-message">Each step brings you closer to your driving license! 🏁</p>
                </div>
            </div>

            <button className="dashboard-button" onClick={() => navigate("/quizzes")}>Take a Quiz</button>
            <button className="logout-button" onClick={() => navigate("/login")}>Logout</button>
        </div>
    );
};

export default Dashboard;








//
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
//
// const Dashboard = ({ user }) => {
//     const navigate = useNavigate();
//     const [userStats, setUserStats] = useState({ quizzesCompleted: 0, progress: 0 });
//
//     // Function to generate greeting message based on time of day
//     const getGreeting = () => {
//         const hour = new Date().getHours();
//         if (hour < 12) return "Good morning! ☀️";
//         if (hour < 18) return "Good afternoon! 🌤️";
//         return "Good evening! 🌙";
//     };
//
//     // Simulate fetching user stats (Replace with API call if needed)
//     useEffect(() => {
//         // Simulated fetch (Replace with real API call)
//         setTimeout(() => {
//             setUserStats({ quizzesCompleted: 5, progress: 70 }); // Example stats
//         }, 1000);
//     }, []);
//
//     const handleLogout = () => {
//         // Add your logout logic here
//         console.log("User logged out");
//         navigate("/login");
//     };
//
//     return (
//         <div className="dashboard-container">
//             <div className="dashboard-header">
//                 <h2>🚗 Welcome, {user?.username || "Road Explorer"}! </h2>
//                 <p className="greeting-message">{getGreeting()} </p>
//                <p> It's a great day to learn and drive safely! 🏁</p>
//             </div>
//
//             <div className="dashboard-content">
//                 <div className="dashboard-card quiz-access">
//                     <h3>📖 Available Quizzes</h3>
//                     <p>Challenge yourself and improve your traffic knowledge!</p>
//                     <button className="dashboard-button" onClick={() => navigate("/quizzes")}>
//                         Take a Quiz ➡
//                     </button>
//                 </div>
//
//                 <div className="dashboard-card stats">
//                     <h3>📊 Your Progress</h3>
//                     <p>You've completed <span className="stats-highlight">{userStats?.quizzesCompleted || 0}</span> quizzes so far!</p>
//                     <div className="progress-bar">
//                         <div className="progress-fill" style={{ width: `${userStats?.progress || 0}%` }}></div>
//                     </div>
//                     <p className="progress-text">Keep going, you're doing great! 🚀</p>
//                 </div>
//             </div>
//
//             <button className="logout-button" onClick={handleLogout}>
//                 Logout
//             </button>
//         </div>
//
//     );
// };
//
// export default Dashboard;

