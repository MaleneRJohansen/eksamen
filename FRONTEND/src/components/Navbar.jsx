import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
      </nav>
    </>
  );
}

export default Navbar;