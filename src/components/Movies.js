import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieElements = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h2>Title: {movie.title}</h2>
        <h4>Time: {movie.time}</h4>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((genre,index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
        <h1>Movies Page</h1>
        { movieElements }
    </div>
  );
};

export default Movies;
