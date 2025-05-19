import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import QuizList from "./components/QuizList";
import QuizDetail from "./components/QuizDetails";
import QuizStart from "./components/QuizStart"; // New page
import QuizResult from "./components/QuizResult"; // New page
// import QuizResults from "./components/quizResultPage/QuizResults";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Navbar from "./pages/Navbar";
import Header from "./components/mainpage/Header"
import Leaderboard from "./pages/Leaderboard";
import { AidaMain } from "./index";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/Loginpage.js/LoginForm";
import InputDesign from "./components/Loginpage.js/InputDesign";
import InputDesign2 from "./components/Signinpage/InputDesign2";
import GeneratedDesign from "./components/QuizListPage/GeneratedDesign";
import QuizQuestion from "./components/QuestionOrder/QuizQuestion";
import AdvancedQuizQuestion from "./components/QuestionOrder/AdvancedQuizQuestion";
import AidaLanding from "./components/mainpage/AidaLanding";
import ChampionsDashboard from "./components/dashboardPage/ChampionsDashboard";
import QuizSection from "./components/dashboardPage/QuizSection";

// Function to check if user is authenticated
const isAuthenticated = () => !!localStorage.getItem("authToken");

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      {/*<Navbar />*/}
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<AidaLanding />} />
          {/*<Route path="/signup" element={<Signup />} />*/}
          <Route path="/signup" element={<InputDesign2 />} />
          <Route path="/login" element={<InputDesign />} />
          {/*<Route path="/dashboard" element={<Dashboard />} />*/}
          <Route path="/dashboard" element={<ChampionsDashboard />} />
          {/*<Route path="/quizzes" element={<QuizList />} />*/}
          <Route path="/quizzes" element={<QuizSection />} />
          <Route path="/quizzes/2" element={<GeneratedDesign />} />
          {/*<Route path="/quizzes" element={<GeneratedDesign />} />*/}
          {/*<Route path="/quiz/:id" element={<QuizDetail />} />*/}
          <Route path="/quiz/:id/start" element={<QuizStart />} /> {/* New */}
          <Route path="/quiz/2/:id/start" element={<QuizQuestion />} />
          <Route
            path="/quiz/advanced/:id/start"
            element={<AdvancedQuizQuestion />}
          />
          <Route path="/quiz-result" element={<QuizResult />} /> {/* New */}
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/loginpage" element={<InputDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import QuizList from "./components/QuizList";
// import QuizDetail from "./components/QuizDetails"; // New component
// import Signup from "./pages/Signup"; // Assuming you have this page
// import Login from "./pages/Login"; // Assuming you have this page
// import Home from "./pages/Home"; // Homepage component, optional
// import Dashboard from "./pages/Dashboard";
//
// function App() {
//     return (
//         <Router>
//             <div>
//                 <h1>Traffic Quiz App</h1>
//                 <Routes>
//                     <Route path="/" element={<Home />} /> {/* Homepage route */}
//                     <Route path="/signup" element={<Signup />} /> {/* Signup page */}
//                     <Route path="/login" element={<Login />} /> {/* Login page */}
//                     <Route path="/quizzes" element={<QuizWrapper />} /> {/* Quiz list page */}
//                     <Route path="/quiz/:id" element={<QuizDetail />} /> {/* Individual quiz details */}
//                 </Routes>
//             </div>
//         </Router>
//     );
// }
//
// // Wrapper component to handle navigation to Quiz details
// const QuizWrapper = () => {
//     const navigate = useNavigate();
//     const token = localStorage.getItem('authToken'); // Checking for token in localStorage
//
//     // If no token found, redirect to login
//     if (!token) {
//         navigate('/login');
//         return null;
//     }
//
//     const handleSelectQuiz = (quiz) => {
//         console.log("Navigating to quiz:", quiz); // ✅ Debugging log
//         if (!quiz.id) {
//             console.error("Quiz ID is missing!", quiz);
//             return;
//         }
//         navigate(`/quiz/${quiz.id}`);
//     };
//
//     return <QuizList onSelectQuiz={handleSelectQuiz} />;
// };
//
// export default App;
