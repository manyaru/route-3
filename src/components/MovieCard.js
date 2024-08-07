import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.title}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      {movie.posterURL ? (
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      ) : (
        <div className="placeholder-poster">No Image Available</div>
      )}
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
