import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/type/types">Type</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/searchresults/:pokemon">Search</Link>
    </nav>
  );
}

export default Navbar;