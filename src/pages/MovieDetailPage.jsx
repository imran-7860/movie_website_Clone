import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import MovieDetail from '../components/MovieDetail';
import CastList from '../components/CastList';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.get(`/movie/${id}`);
      setMovie(response.data);
    };

    const fetchCast = async () => {
      const response = await api.get(`/movie/${id}/credits`);
      setCast(response.data.cast);
    };

    fetchMovie();
    fetchCast();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <MovieDetail movie={movie} />
      <h2 className="text-2xl font-bold mt-4">Cast</h2>
      <CastList cast={cast} />
    </div>
  );
};

export default MovieDetailPage;
