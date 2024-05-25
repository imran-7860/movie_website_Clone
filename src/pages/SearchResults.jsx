import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api';
import MovieCard from '../components/MovieCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get('query');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api.get(`/search/movie`, { params: { query, page } });
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [query, page]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button onClick={() => setPage(page > 1 ? page - 1 : page)} className="px-3 py-2 bg-gray-700 text-white rounded">Previous</button>
        <button onClick={() => setPage(page + 1)} className="px-3 py-2 bg-gray-700 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default SearchResults;
