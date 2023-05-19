import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Logout() {
  return (
    <Link to='/logout'>
      <button className='btn'>Log Out</button>
    </Link>
  );
}
