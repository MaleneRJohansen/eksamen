import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTypeDetails } from './api'
import '../styles/type.scss'

function Type() {
  const { type } = useParams()
  const [typeDetails, setTypeDetails] = useState(null)

  useEffect(() => {
    const loadTypeDetails = async () => {
      const data = await fetchTypeDetails(type).catch(err => console.error(err))
      setTypeDetails(data)
    }
    loadTypeDetails()
  }, [type])

  return (
    <>
    <section className='typeDetails'>
      {typeDetails ? (
        <>
          <h1>{typeDetails.name}</h1>
          <p>{`Pokémon of ${typeDetails.name}-type: `}{typeDetails.pokemon.map(poke => poke.pokemon.name).join(', ')}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
    </>
  )
}

export default Type

