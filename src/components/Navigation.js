import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className='heading'>Home</Link></li>
        <li><Link to="/add" className='heading'>Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
