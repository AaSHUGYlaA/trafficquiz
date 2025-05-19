import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook for navigation

const Signup = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // For loading state
    const [error, setError] = useState(''); // For error message

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading when form is submitted
        setError(''); // Clear previous error messages

        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,  // Include username
                    email,
                    passwordHash: password,  // Send raw password as passwordHash
                }),
            });

            if (response.ok) {
                alert("Signup successful! Please log in.");
                navigate("/login"); // Redirect to login page on successful signup
            } else {
                const data = await response.json();
                setError(data.message || "Signup failed."); // Display error message from server
            }
        } catch (err) {
            console.error("Error during signup:", err);
            setError("Error during signup."); // Generic error message
        } finally {
            setLoading(false); // Stop loading after request completes
        }
    };



    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}
            <form onSubmit={handleSignup}>
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update username state
                        placeholder="Username"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                        placeholder="Password"
                        required
                    />
                </div>
                <div>
                    <button type="submit" disabled={loading}>Sign Up</button>
                </div>
            </form>
            {loading && <p>Loading...</p>} {/* Show loading text */}
        </div>
    );
};

export default Signup;



