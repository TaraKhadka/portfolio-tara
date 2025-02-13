import style from '../css/Navbar.css'
import { NavLink } from 'react-router-dom'
import React from 'react'
const Navbar = () => {
   return (
      <nav className=" sticky-top fixed-top navbar navbar-expand-md my-primary m-0">
         <div className="container ">
            <div className="navbar-header ">
               <a className="navbar-brand" href="/">Tara Singh Khadka</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
               <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item"><NavLink className='nav-link text-white' to='/'>Home</NavLink></li>
                  <li className="nav-item"><NavLink className='nav-link text-white' to='/About'>About</NavLink></li>
                  <li className="nav-item"><NavLink className='nav-link text-white' to='/Works'>Works</NavLink></li>
                  <li className="nav-item"><NavLink className='nav-link text-white' to='/Projects'>Projects</NavLink></li>
                  <li className="nav-item"><NavLink className='nav-link text-white' to='/Blogs'>Blogs</NavLink></li>
                  <li className="nav-item"><NavLink className='nav-link text-white' to='/Cv'>CV</NavLink></li>
                  <li className="nav-item"><NavLink className='nav-link text-white' to='/Contact'>Contact</NavLink></li>
               </ul>
            </div>
         </div>
      </nav>
      
   )
}

export default Navbar