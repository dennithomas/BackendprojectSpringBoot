import React from 'react'
import About from '../../About'
import NavBar from '../../NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'

function AdminHome() {
    return (
        <div>  
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                {/* <Route path='/users' element={<User/>}></Route>
                <Route path='/adduser' element={<Adduser/>}></Route> */}
            </Routes>
        </div>
    )
}

export default AdminHome
