import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">UIN POKEDEX</Link>
        <Link to="/teams">TEAMS</Link>
      </nav>
    </>
  );
}

export default Navbar;