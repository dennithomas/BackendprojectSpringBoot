import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './NavBar.css';

function NavBar() {

    const path=useLocation();
    const isAdmin=path.pathname.startsWith("/admin-home");

        const linkClass = ({ isActive }) =>
        isActive ? "navbar-link active" : "navbar-link";

    return (

       <div className="navbar-container">
            <div className="navbar-wrapper">

          {
            isAdmin ? (
                <>
                 <NavLink to="/admin-home" end className={linkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/admin-home/about" className={linkClass}>
                            About
                        </NavLink>

                        <NavLink to="/admin-home/users" className={linkClass}>
                            Users
                        </NavLink>


                        <NavLink to="/admin-home/adduser" className={linkClass}>
                            Add User
                        </NavLink>

                        <NavLink to="/" className="navbar-link logout-link">
                            Logout
                        </NavLink>
                </>
            ) : (
                <>
                <NavLink to="/user-home" end className={linkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/user-home/about" className={linkClass}>
                            About
                        </NavLink>

                        <NavLink to="/user-home/books" className={linkClass}>
                            Books
                        </NavLink>
                        <NavLink to="/user-home/addtocart" className={linkClass}>
                        Cart
                        </NavLink>
                        <NavLink to="/" className="navbar-link logout-link">
                            Logout
                        </NavLink>
                </>
            )
          }
            
           </div>   
        </div>
    )
}

export default NavBar
