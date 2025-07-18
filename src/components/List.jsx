import React from 'react';
import Card from './Card';
import './List.css';

const List = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map(movie => (
          <Card key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default List;
