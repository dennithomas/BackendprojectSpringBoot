import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Fixed: useNavigate instead of goto
import "./UserLoginpage.css";

function UserLoginpage() {
    const navigate = useNavigate(); // Fixed: useNavigate hook
    const [emailid, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        // Create the login data object matching your backend DTO
        const loginData = {
            emailid: emailid,
            password: password
        };

        console.log("Sending login data:", loginData); // Debug log

        try {
            const response = await axios.post(
                "http://localhost:8080/user-login",
                loginData,  // Send as JSON body, not as params
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log("Login response:", response.data); // Debug log
            
            if (response.status === 200) {
                alert("✅ " + response.data);
                
                // Store user info in localStorage/session if needed
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", emailid);
                
                // Navigate to home page
                navigate("/user-home"); // Fixed: use navigate instead of goto
            }

        } catch (error) {
            console.error("Login error:", error);
            
            if (error.response) {
                // Server responded with error
                if (error.response.status === 401) {
                    setErrorMessage("Invalid email or password");
                } else {
                    setErrorMessage(error.response.data || "Login failed");
                }
            } else if (error.request) {
                // No response from server
                setErrorMessage("Cannot connect to server. Please check if backend is running.");
            } else {
                // Other errors
                setErrorMessage("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="coverloginpage">
                <div className="arrangeloginpage">
                    <div className="midloginpage">
                        <h2>User Login</h2>
                        
                        {errorMessage && (
                            <div className="error-message" style={{color: 'red', marginBottom: '15px'}}>
                                {errorMessage}
                            </div>
                        )}
                        
                        <form className="login-form" onSubmit={handleLogin}>

                            <input
                                type="email" // Changed to email type for validation
                                placeholder="Enter your email"
                                className="login-input"
                                value={emailid}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessage("");
                                }}
                                required
                            />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="login-input"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrorMessage("");
                                }}
                                required
                            />

                            <button 
                                type="submit" 
                                className="login-button"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>

                            <div className="register-link">
                                Don't have an account? <Link to="/">Register here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLoginpage;