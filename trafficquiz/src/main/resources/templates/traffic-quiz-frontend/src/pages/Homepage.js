import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";
import "./Homepage.css";
import Leaderboard from "./Leaderboard";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage1 from "../image/arimage' (2).png"
import profile from "../image/progile.png"
import share_bot from "../image/bot.png"
import mainpag from "../components/mainpage/mainpage.png"
import InputDesign from "../components/Loginpage.js/InputDesign";

const Homepage = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [user, setUser] = useState(null);
  //const { user } = useAuth(); // Get user authentication status

  useEffect(() => {
    fetch("http://localhost:8080/api/quizzes")
        .then((res) => res.json())
        .then((data) => setQuizzes(data))
        .catch((error) => console.error("Error fetching quizzes:", error));

// Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Convert from string to object
    }


    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user-scores/leaderboard");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Debug: Check the structure of data received
        console.log("📥 Leaderboard Data:", data);

        if (!Array.isArray(data)) {
          throw new Error("Leaderboard data is not an array!");
        }

        // Ensure each item has username before mapping
        const validData = data.filter(item => item.username && item.score);

        setLeaderboard(validData);
      } catch (error) {
        console.error("❌ Error fetching leaderboard:", error);
      }
    };
  }, []);

  const handleStartQuiz = (quizId) => {
    const user = localStorage.getItem("authToken"); // Check if user is logged in

    if (!user && quizId !== 4) {
      localStorage.setItem("pendingQuiz", quizId); // Save quiz ID before login
      navigate("/login"); // Redirect to login
    } else {
      navigate(`/quiz/${quizId}/start`); // Allow quiz access if logged in
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // Redirect to homepage
  };


  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="homepage">


      <section className="hero">
        <Carousel className="hero-carousel">
          {/* First Slide */}
          <Carousel.Item interval={2000}>
            <div className="hero-content">
              <div className="hero-text-container">
                <h1 className="hero-title">
                  The free, fun, and effective way to
                  <br />
                  learn road safety!
                </h1>
                <div className="cta-buttons">
                  <button className="btn-get-started" onClick={handleGetStarted}>
                    Get started
                  </button>
                  <button className="btn-login" onClick={handleLogin}>
                    I ALREADY HAVE AN ACCOUNT
                  </button>
                </div>
              </div>
              <div className="hero-image-container">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d54932380e242747c69cff751db291477c54ed"
                    alt="VR Learning Experience"
                    className="hero-image"
                />
              </div>
            </div>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item interval={2000}>
            <div className="hero-content">
              <div className="hero-text-container">
                <h1 className="hero-title">Interactive AR Scenarios with the features of Gamification</h1>
                <p>Learn road safety through engaging augmented reality lessons.</p>
                <p>Test your skills with fun and interactive road safety quizzes.</p>
              </div>
              <div className="hero-image-container">
                <img src={heroImage1} alt="VR Learning Experience" className="hero-image" />
              </div>
            </div>
          </Carousel.Item>

          {/* Third Slide */}
          <Carousel.Item interval={2000}>
            <div className="hero-content">
              <div className="hero-text-container">
                <h1 className="hero-title">AIDA: Your Traffic Education Bot</h1>
                <p className="hero-description">
                  Learn traffic rules effortlessly through interactive quizzes and gamification.
                  Challenge yourself in solo mode or compete with friends in group challenges!
                </p>
              </div>
              <div className="hero-image-container">
                <img src={share_bot} alt="Gamified Traffic Learning" className="hero-image" />
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </section>

      {/*<section className="hero">*/}
      {/*  <div className="hero-content">*/}
      {/*    <div className="hero-text-container">*/}
      {/*      <h1 className="hero-title">*/}
      {/*        The free, fun, and effective way to*/}
      {/*        <br />*/}
      {/*        learn a road safety!*/}
      {/*      </h1>*/}
      {/*      <div className="cta-buttons">*/}
      {/*        <button className="btn-get-started" onClick={handleGetStarted}>*/}
      {/*          Get started*/}
      {/*        </button>*/}
      {/*        <button className="btn-login" onClick={handleLogin}>*/}
      {/*          I ALREADY HAVE AN ACCOUNT*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="hero-image-container">*/}
      {/*      <img*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d54932380e242747c69cff751db291477c54ed"*/}
      {/*        alt="VR Learning Experience"*/}
      {/*        className="hero-image"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*</section>*/}


      {/* Quiz List Section */}
      <section className="quiz-list">
        <h2 className="quiz-list-title">📚 Available Quizzes</h2>
        <div className="quiz-container">
          {quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                  <div key={quiz.id} className="quiz-card">
                    <div className="book-cover">
                      <div className="book-title">
                        <h3>{quiz.title}</h3>
                      </div>
                    </div>
                    <button className="btn-start-quiz" onClick={() => handleStartQuiz(quiz.id)}>
                      Start Quiz
                    </button>
                  </div>
              ))
          ) : (
              <p className="no-quizzes">No quizzes available</p>
          )}
        </div>
      </section>
      {/*<section className="quiz-list">*/}
      {/*  <h2>Available Quizzes</h2>*/}
      {/*  <div className="quiz-container">*/}
      {/*    {quizzes.length > 0 ? (*/}
      {/*        quizzes.map((quiz) => (*/}
      {/*            <div key={quiz.id} className="quiz-card">*/}
      {/*              <h3>{quiz.title}</h3>*/}
      {/*              <button*/}
      {/*                  className="btn-start-quiz"*/}
      {/*                  onClick={() => handleStartQuiz(quiz.id)}*/}
      {/*              >*/}
      {/*                Start Quiz*/}
      {/*              </button>*/}
      {/*            </div>*/}
      {/*        ))*/}
      {/*    ) : (*/}
      {/*        <p>No quizzes available</p>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</section>*/}



      {/* Leaderboard Section */}
      <section className="leaderboard">
        <h2>Leaderboard 🏆</h2>
        <div className="leaderboard-container">
          {leaderboard.length > 0 ? (
              <ul>
                {leaderboard.map((player, index) => (
                    <li key={player.id} className="leaderboard-entry">
                      <span className="rank">#{index + 1}</span>
                      <span className="name">{player.name}</span>
                      <span className="score">{player.score} pts</span>
                    </li>
                ))}
              </ul>
          ) : (
              <p>No leaderboard data available</p>
          )}
        </div>
      </section>





      {/*<nav className="language-nav">*/}
      {/*  <i className="ti ti-chevron-left" />*/}
      {/*  <div className="language-links">*/}
      {/*    <div className="language-link active">English</div>*/}
      {/*    <div className="language-link">russian</div>*/}
      {/*    <div className="language-link">kazakh</div>*/}
      {/*    <div className="language-link">Italian</div>*/}
      {/*    <div className="language-link">Portuguese</div>*/}
      {/*    <div className="language-link">Dutch</div>*/}
      {/*    <div className="language-link">Japanese</div>*/}
      {/*  </div>*/}
      {/*  <i className="ti ti-chevron-right" />*/}
      {/*</nav>*/}






      <section className="features">
        <div className="feature-section">
          <div className="feature-content">
            <h2 className="feature-title">free. fun. effective.</h2>
            <div className="feature-description">
              Learning with AIDA is fun, and
              <span className="highlight">research shows that it works</span>!
              With quick, bite-sized lessons, you'll earn points and unlock new
              levels while gaining real-world communication skills.
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b08835787de8a09771f2f2cf3bbbb1497129217"
            alt="Learning Features"
            className="feature-image"
          />
        </div>

        <div className="feature-section reverse">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7def8c715cc8083101ddd4179e833f482c1423c"
            alt="Science Backed"
            className="feature-image"
          />
          <div className="feature-content">
            <h2 className="feature-title">backed by science</h2>
            <div className="feature-description">
              We use a combination of research-backed teaching methods and
              delightful content to create courses that effectively teach
              reading, writing, listening, and speaking skills!
            </div>
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-content">
            <h2 className="feature-title">stay motivated</h2>
            <div className="feature-description">
              We make it easy to form a habit of language learning with
              game-like features, fun challenges, and reminders from our
              friendly mascot, Duo the owl.
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6cdde7e598abd1e1cb5fa8a0d2768506544db45"
            alt="Stay Motivated"
            className="feature-image"
          />
        </div>

        {/*<div className="feature-section reverse">*/}
        {/*  <div className="feature-content">*/}
        {/*    <h2 className="feature-title">*/}
        {/*      personalized*/}
        {/*      <br />*/}
        {/*      learning*/}
        {/*    </h2>*/}
        {/*    <div className="feature-description">*/}
        {/*      Combining the best of AI and language science, lessons are*/}
        {/*      tailored to help you learn at just the right level and pace.*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>
    </div>
  );
};

export default Homepage;
