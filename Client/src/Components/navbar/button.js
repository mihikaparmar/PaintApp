import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='signin'>
      <button className='btn'>Login</button>
    </Link>
  );
}