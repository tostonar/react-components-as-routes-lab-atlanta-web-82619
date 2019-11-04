import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map((actor, i) =>
        <div className="actor" key={i}>
          <h2>Name: {actor.name}</h2>
          <p>Movies: </p>
          <ul>
            {actor.movies.map((movie, i) => <li key={i}>{movie}</li>)}
          </ul>

        </div>
        )}
    </div>
  );
};

export default Actors;
