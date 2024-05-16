import React from 'react'
import Type from './Type'
import Pokemon from './Pokemon'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <section>
        <h2>Main Pokemons</h2>
        <p>Her skal de 9 først pokemons fra API-et vises</p>
      </section>
      <section>
        <h2>Types</h2>
        <p>Her skal alle typer vises</p>
      </section>
    </>
  )
}

export default Home
