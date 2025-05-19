import React from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthenticated = !!localStorage.getItem("authToken");
    const location = useLocation(); // Get current page path


    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (

        <header className="header">

            {/* Logo Section */}
            <div className="logo-container">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd7d7e1a35ea71a1f62bed08ba70900538b2abd"
                    alt="AIDA Logo"
                    className="logo-image"
                />
                <div className="logo-text">AIDA</div>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li>
                    <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/quizzes" className={location.pathname === "/quiz" ? "active" : ""}>
                        Quiz
                    </NavLink>
                </li>
                <li><Link to="/leaderboard">Leaderboard</Link></li> {/* ✅ Add Leaderboard Link */}
            </ul>
            {/* User Status Section */}
            <div className="user-status">
                {user && (
                    <div className="user-info">
                        <span>Welcome, {user.username}!</span>
                        <button className="btn-logout" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;

