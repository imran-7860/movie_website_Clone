import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApiKeyContext } from "../components/ApiProvider";
import MovieDetail from "../components/MovieDetail";
import CastList from "../components/CastList";
import axios from "axios";

const MovieDetailPage = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const { Api_key } = useApiKeyContext();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`
      );
      setMovie(response.data);
    };

    const fetchCast = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`
      );
      setCast(response.data.cast);
    };

    fetchMovie();
    fetchCast();
  }, [movie_id, Api_key]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-4 container mx-auto">
      <MovieDetail movie={movie} />
      <h2 className="text-2xl font-bold mt-4 ml-10">Cast</h2>
      <CastList cast={cast} />
    </div>
  );
};

export default MovieDetailPage;
