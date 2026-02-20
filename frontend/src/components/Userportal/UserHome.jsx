import React from 'react'
import About from '../../About'
import Home from '../Home'
import NavBar from '../../NavBar'
import { Route, Routes } from 'react-router-dom'

function UserHome() {
    return (
        <div>
       <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </div>
    )
}

export default UserHome
