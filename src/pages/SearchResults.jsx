import React, { useState, useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import { useApiKeyContext } from "../components/ApiProvider";
import MovieCard from "../components/MovieCard";
import axios from "axios";



const SearchResults = () => {
 
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { Api_key } = useApiKeyContext();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${query}&page=${page}`
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [query, page, Api_key]);

  return (
    <div className="p-4 min-h-screen container mx-auto">
      {movies.length > 0 ? (
        <>
          <h1 className="text-lg  px-2">
            Search results for{" "}
            <span className="font-bold text-red-600 text-2xl">"{query}"</span>{" "}
          </h1>
          <div className="flex flex-wrap justify-center mt-2">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-4 ">
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
        </>
      ) : (
        <div>
          <h1 className="text-lg  px-2">
            No result for{" "}
            <span className="font-bold text-red-600 text-2xl">"{query}"</span>{" "}
          </h1>
          <div className="mt-5 text-lg px-2">
            Back to{" "}
            <Link to={"/"} className="italic text-blue-400 text-lg">
              Home Page &larr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
