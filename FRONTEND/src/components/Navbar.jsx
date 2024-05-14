import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/:type">Type</Link>
        <Link to="teams">Teams</Link>
    </ul>
  )
}

export default Navbar
Navbar