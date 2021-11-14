import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
 return (
  <nav className='nav'>
  <ul className='nav__list'>
   <li className='nav__item'>
    <NavLink className='nav__link' to="/profile"> Profile</NavLink>
   </li>
   <li className='nav__item'>
    <NavLink  className='nav__link' to="/dialogs"> Messages</NavLink>
   </li>
   <li className='nav__item'>
    <NavLink className='nav__link' to="#"> News</NavLink>
   </li>
   <li className='nav__item'>
    <NavLink className='nav__link' to="#"> Music</NavLink>
   </li>
   <li className='nav__item'>
    <NavLink className='nav__link' to="#"> Settings</NavLink>
   </li>
  </ul>
 </nav>
 )
}

export default Nav;