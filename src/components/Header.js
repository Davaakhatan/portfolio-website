import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css'; // 


function Header() {
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className="logo">DZ</div>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
