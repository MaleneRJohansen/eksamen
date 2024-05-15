import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
        <Link to="/">Home</Link>
        <Link to="/pokemons/:pokemon">Pokemon</Link>
        <Link to="/:type">Type</Link>
        <Link to="teams">Teams</Link>
        <Link to="/searchresults/:pokemon">Search</Link>
    </ul>
  )
}

export default Navbar
Navbar