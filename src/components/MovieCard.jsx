import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 m-2">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded"
        />
      </Link>
      <h3 className="text-center text-lg mt-2 font-semibold" >{movie.title}</h3>
      <p className="flex justify-center font-semibold ">Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
