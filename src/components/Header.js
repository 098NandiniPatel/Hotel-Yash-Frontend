
import React, { useEffect, useState} from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../img/logo.png'
// import Hamburger from "./Hamburger";

export default function Header() {
const [hamburger,setHamburger]=useState(false)
const [style,setStyle]=useState("navbar-list")

const toggle =()=>setHamburger(!hamburger)
useEffect(()=>{hamburger? setStyle("navbar-list-update"):setStyle("navbar-list")},[hamburger])
  return (
    <>
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <nav className="Nav">
        <div className="menuIcon">
          {/* <ul className="navbar-list "> */}
          <ul className={style}>
            <li>
              <NavLink className='navbar-link' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='navbar-link' to='/gallery'>Gallery</NavLink>
            </li>
            <li>
              <NavLink className='navbar-link' to='/aboutus'>About Us</NavLink>
            </li>
            <li>
              <NavLink className='navbar-link' to='/contactus'>Contact Us</NavLink>
            </li>
            <li>
              <NavLink className='navbar-btn' to='/bookonline'>Book Online</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <button onClick={toggle} className="burger"> {hamburger?<AiOutlineClose/>:<AiOutlineMenu/>}</button>
    </header>
    
    </>
  );
}