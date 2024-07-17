import React, { useState, useEffect } from "react";
import { useApiKeyContext } from "../components/ApiProvider";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { Api_key } = useApiKeyContext();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${page}`
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [page, Api_key]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold ml-10">Popular Movies</h1>
      <div className="flex flex-wrap justify-center mt-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          className="px-3 py-2 bg-gray-700 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-3 py-2 bg-gray-700 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Popular;
