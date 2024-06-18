import React from "react";
import { link } from 'reacy-router-dom';

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Book</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;