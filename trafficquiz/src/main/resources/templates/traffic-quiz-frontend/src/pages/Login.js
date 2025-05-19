import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const [isSignUp, setIsSignUp] = useState(false);
    //

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:8080/api/users/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password}),
            });

            console.log("Server response status:", response.status);

            if (response.ok) {
                const data = await response.json();
                console.log("✅ Login successful, token:", data.token);

                // ✅ Store user info in localStorage
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("user", JSON.stringify({
                    userId: data.userId,
                    username: data.username
                }));

                navigate("/dashboard"); // Redirect to dashboard after login
            } else {
                const errorText = await response.text();
                console.log("❌ Error response from server:", errorText);
                setError(errorText || "Invalid username or password.");
            }
        } catch (err) {
            console.error("❌ Error during login:", err);
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError("");
    //
    //     try {
    //         const response = await fetch("http://localhost:8080/api/users/login", {
    //             method: "POST",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify({username, password}),
    //         });
    //
    //         console.log("Server response status:", response.status);
    //
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log("✅ Login successful, token:", data.token);
    //
    //             // ✅ Store user info in localStorage
    //             localStorage.setItem("authToken", data.token);
    //             localStorage.setItem("user", JSON.stringify({username})); // Store username
    //
    //             navigate("/dashboard"); // Redirect to dashboard after login
    //         } else {
    //             const errorText = await response.text();
    //             console.log("❌ Error response from server:", errorText);
    //             setError(errorText || "Invalid username or password.");
    //         }
    //     } catch (err) {
    //         console.error("❌ Error during login:", err);
    //         setError("Network error. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-image"></div>
                <div className="login-card">
                    <h2 className="login-title">С Новым Визитом !</h2>
                    <p className="login-subtitle">
                        Нет аккаунта?  <span className="signup-link" onClick={() => navigate("/signup")}>
              Зарегистрироваться
            </span>
                    </p>

                    {error && <p className="error-message">{error}</p>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="login-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />

                        <input
                            type="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />

                        <div className="login-options">
                            <label className="remember-me">
                                <input type="checkbox"/> Remember me
                            </label>
                            <span className="forgot-password">Forgot password?</span>
                        </div>

                        <button className="login-button" type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Sign In"}
                        </button>
                    </form>


                </div>
            </div>
        </div>
    );
}
export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//
// const Login = () => {
//     const navigate = useNavigate(); // Use useNavigate to navigate programmatically
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false); // Define loading state
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//
//         try {
//             const response = await fetch("http://localhost:8080/api/users/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ username, password }),
//             });
//
//             console.log("Server response status:", response.status);
//
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Login successful, token:", data.token);
//                 localStorage.setItem("authToken", data.token);
//                 navigate("/dashboard");
//             } else {
//                 const errorText = await response.text();
//                 console.log("❌ Error response from server:", errorText);
//                 setError(errorText); // Show exact server message
//             }
//         } catch (err) {
//             console.error("❌ Error during login:", err);
//             setError("Error during login. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return (
//         <div>
//             <h2>Login</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Username"
//                     required
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                     required
//                 />
//                 <button type="submit" disabled={loading}>
//                     {loading ? "Logging in..." : "Login"}
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default Login;

