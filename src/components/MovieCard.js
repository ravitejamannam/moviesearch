import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onSelect }) => (
  
    <div className="movie-card" onClick={() => onSelect(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );


export default MovieCard;
