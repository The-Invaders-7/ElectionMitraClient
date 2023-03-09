import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../Images/logo.svg"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} className="img1"/>
        </Link>
        <i class='fab fa-firstdraft' />

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/dashboard'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dashboard 
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/addvoters'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              AddVoters
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/queryingPage'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Search Voter
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
