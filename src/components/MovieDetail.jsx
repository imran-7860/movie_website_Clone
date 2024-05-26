import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="p-4 md:flex">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg md:w-1/3"
      />
      <div className="ml-4 md:w-2/3 ">
        <h1 className="pb-4 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl md:pb-8">{movie.title}</h1>
        <p className="pb-4 mt-2 md:text-lg lg:text-xl md:pb-6 ">{movie.overview}</p>
        
        <p className="mt-2 "><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="pb-3 mt-2 md:pb-5 "><strong>Rating:</strong> {movie.vote_average.toFixed(1)}</p>
        <button className='px-4 py-2 bg-red-500 rounded ' onClick={()=>alert('Booking Sucessfull')}>Book Now</button>
      </div>
    </div>
  );
};

export default MovieDetail;