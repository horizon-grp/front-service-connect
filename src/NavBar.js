import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
return (
    <div>
    <div className='navElts'>
        <ul>
        {/* <li> <NavLink to="/">  </NavLink></li> */}
        <li> <NavLink to="/Home.js"> Home </NavLink></li>
        <li> <NavLink to="/About.js"> About </NavLink></li>
        <li> <NavLink to="/Service.js"> Services </NavLink></li>
        <div className='droping'>
        <li> Register </li>
            <div className='dropdown'>
            <ul>
                <li> <NavLink to="/RegisterFreelancer.js"> Freelancer </NavLink></li>
            </ul>
            </div>
        </div>
        <div className="logOut">
        <a href="Landing.js"> Log Out </a>       
        </div>
        </ul>
    </div>
    </div>
)
}

export default NavBar