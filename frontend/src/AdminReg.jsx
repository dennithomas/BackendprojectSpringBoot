import React, { useState } from "react";
import "./AdminReg.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminReg() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    adname: "",
    mobilenumber: "",
    emailid: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = {
      ...admin,
      mobilenumber: Number(admin.mobilenumber),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/admin-registration",
        sendData
      );

      alert("Admin Registered Successfully ✅");
      navigate("/admin-login");
    } catch (error) {
      console.error(error);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="adcover">
      <div className="adarrange">
        <div className="admid">
          <h2>Admin Register</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="adname"
              placeholder="Admin Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="emailid"
              placeholder="Email ID"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobilenumber"
              placeholder="Mobile Number"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input type="text"
             name="gender"
             placeholder="Gender"
             onChange={handleChange}
             required
            />

            <button type="submit">Register</button>

            <div className="Adminloginpage">
              <Link to="/admin-login">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminReg;