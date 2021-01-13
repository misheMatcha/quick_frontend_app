import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const navBar = () => {
    return <div className='navbar'>
      <Link to="/" className="navbar-brand">Whisper</Link>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to="/posts" className="nav-link disabled">Posts</Link>
        </li>
        <li className='nav-item'>
          <Link to="/albums" className="nav-link disabled">Albums</Link>
        </li>
        <li className='nav-item'>
          <Link to="/users" className="nav-link">Users</Link>
        </li>
      </ul>
    </div>
  };

  return navBar();
};

export default Nav;