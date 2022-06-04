import React, {useState} from "react";
import {Button} from './button'
import {Link} from 'react-router-dom'
import './navbar.css'


function Navbar(){
    const [click,setclick] =useState(false)
  

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false);

   

    return(
    <>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         PAINTAPP
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
             Lets Paint
            </Link>
          </li>
          
          
          <li>
            <Link
              to='/signin'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Link to='/usersignin'>
      <button className='bttn'>Login</button>
    </Link>
      </nav>
    </>
)
}
export default Navbar;