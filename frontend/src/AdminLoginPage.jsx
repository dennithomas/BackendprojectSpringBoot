import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminLoginPage.css";

function AdminLoginPage() {
  const navigate = useNavigate();

  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const loginData = {
      emailid,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/admin-login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // SUCCESS
      if (response.status === 200) {
        alert("✅ " + response.data);

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", emailid);

        navigate("/admin-home");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        // If backend sends string like "Login Failed"
        if (typeof error.response.data === "string") {
          setErrorMessage(error.response.data);
        }
        // If backend sends object
        else if (error.response.data?.message) {
          setErrorMessage(error.response.data.message);
        }
        else {
          setErrorMessage("Invalid email or password");
        }
      } else if (error.request) {
        setErrorMessage("Server not responding. Check backend.");
      } else {
        setErrorMessage("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="adlogincover">
      <div className="adloginarrange">
        <div className="adloginmid">
          <h2>Admin Login</h2>

          {errorMessage && (
            <div
              className="error-message"
              style={{ color: "red", marginBottom: "15px" }}
            >
              {errorMessage}
            </div>
          )}

          <form className="adlogin-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              className="adlogin-input"
              value={emailid}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="adlogin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="Adminlogin-button"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="Adminregister-link">
              Don't have an account?{" "}
              <Link to="/admin">Register here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;