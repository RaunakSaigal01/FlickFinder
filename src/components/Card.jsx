import React from 'react';
import './Card.css';

const API_KEY = '32fe0cbe';  // use env var if you want

const Card = ({ movie }) => {
  const posterUrl = `http://img.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`;
  const alte='./images/alternate.png'
  return (
    <div className="movie-card">
      <img src={posterUrl}
      onError={(e)=>{e.target.src=alte}} />
      <h3>{movie.Title}</h3>
      <p><strong>Release Year:</strong> {movie.Year}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      
    </div>
  );
};
export default Card;
