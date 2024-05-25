import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="flex p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-1/3 rounded"
      />
      <div className="ml-4">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="mt-2">{movie.overview}</p>
        <p className="mt-2"><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="mt-2"><strong>Rating:</strong> {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
