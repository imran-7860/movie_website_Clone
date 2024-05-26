import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="w-52  m-2 group cursor-pointer bg-gray-800 rounded-lg pb-4 hover:shadow-xl">
      <Link to={`/movie/${movie.id}`}>
        <div className="overflow-hidden rounded">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto transition-transform  hover:scale-110"
          />
        </div>
      </Link>
      <h3 className="px-2 text-xl group-hover:text-red-500 mt-2 font-semibold uppercase">{movie.title}</h3>
      <p className="px-2  ">Rating: {(movie.vote_average).toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;
