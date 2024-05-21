import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from './client';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const query = `*[_type == "team"]{
      title,
      "imageUrl": image.asset->url,
      _id,
      slug
    }`
    
    client.fetch(query)
      .then(data => setTeams(data))
      .catch(console.error);
  }, [])

  return (
    <div>
      <h1>Teams</h1>
      {teams.map(team => (
        <section key={team._id}>
          <h2>{team.title}</h2>
          <img src={team.imageUrl} alt={team.title} />
          <Link to={`/team/${team.slug.current}`}>View Team</Link>
        </section>
      ))}
    </div>
  )
}

export default Teams
