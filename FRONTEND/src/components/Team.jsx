import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from './client';

function Team() {
  const [team, setTeam] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const query = `*[_type == "team" && slug.current == $slug][0]{
      title,
      pokemon[]->{
        name,
        "imageUrl": image.asset->url,
        types
      }
    }`;

    client.fetch(query, { slug })
      .then(data => setTeam(data))
      .catch(console.error);
  }, [slug])

  if (!team) {
    return <section>Loading team details...</section>;
  }

  return (
    <div>
      <h1>{team.title}</h1>
      {team.pokemon && team.pokemon.length > 0 ? (
        team.pokemon.map(poke => (
          <section key={poke.name}>
            <h2>{poke.name}</h2>
            <img src={poke.imageUrl} alt={poke.name} />
            <p>Types: {poke.types.join(', ')}</p>
            <Link to={`/pokemon/${poke.name}`}>View Pokemon</Link>
          </section>
        ))
      ) : (
        <p>No Pokémon found in this team.</p>
      )}
    </div>
  );
}

export default Team;

