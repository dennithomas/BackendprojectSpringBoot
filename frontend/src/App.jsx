import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import UserLoginpage from "./UserLoginpage";
import Home from "./components/Home";
import AdminReg from "./AdminReg";
import AdminLoginPage from "./AdminLoginPage";
import AdminHome from "./components/adminportal/AdminHome";
import UserHome from "./components/Userportal/UserHome";


function App() {
  return (
    <div>
      <BrowserRouter basename="/Springboot-React-Project2/">
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/login" element={<UserLoginpage/>} />
          {/* <Route path="/home" element={<Home/>} /> */}
          <Route path="/admin" element={<AdminReg/>} />
          <Route path="/admin-login" element={<AdminLoginPage/>} />
          <Route path="/admin-home/*" element={<AdminHome/>} />
          <Route path="/user-home/*" element={<UserHome/>} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
