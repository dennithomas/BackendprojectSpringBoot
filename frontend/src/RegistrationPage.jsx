import React, { useState } from 'react'
import './RegistrationPage.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function RegistrationPage() {
  let goto=useNavigate();
  const [formData, setFormData] = useState({
  name:"",
  emailid:"",
  mobilenumber:"",
  password:"",
  gender:"",
  address:""
}) 
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
};
 const handleSubmit = async (e) => {
  e.preventDefault();

  const sendData = {
    ...formData,
    mobilenumber: Number(formData.mobilenumber)
  };

    try {
      const response = await axios.post(
        "http://localhost:8080/user-registration",
        sendData
      );

    // alert("User Registered Successfully");
      goto("/login");

  } catch (error) {
    console.error(error);
  }
};



    return (
        <div>
            <div className="coverpage">
                <div className="arrange">
                    <div className="midpage">

                        <form onSubmit={handleSubmit}>
                          <div className="adminuser"><Link to="/admin">Go to Admin</Link></div>
                            <div className="h2"><h2>User Register</h2></div>


      <div className="name">
  <input type="text" name="name" placeholder="Name" onChange={handleChange}  required />
</div>

<div className="email">
  <input type="email" name="emailid" placeholder="Email" onChange={handleChange} required />
</div>

<div className="mobile">
  <input type="tel" name="mobilenumber" placeholder="Mobile Number" onChange={handleChange} required />
</div>

<div className="password">
  <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
</div>

<div className="gender">
  <select name="gender" onChange={handleChange} required>
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
</div>

<div className="address">
  <textarea name="address" placeholder="Address" onChange={handleChange} />
</div>

<div className="button">
  <button>Register</button>
</div>
<div className="loginpage">
  <Link to="/login">User Login Page</Link> 
</div>

    </form>

                </div>
                </div>
                
            </div>
        </div>
    )
  }

export default RegistrationPage
