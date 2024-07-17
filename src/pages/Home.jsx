import React, { useState, useEffect } from "react";
// import api from "../api";
import MovieCard from "../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Features from "../components/Features";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { pathname } = useLocation();
  const Api_key = 'c45a857c193f6302f2b5061c3b85e743'

  useEffect(() => {
    const fetchMovies = async () => {
      // const response = await api.get(`/movie/popular`, { params: { page } });
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${page}`)
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="">
      <Swiper
        spaceBetween={1}
        slidesPerView={1.3}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img
            src={require("../../src/assets/img2.webp")}
            alt="slide"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../src/assets/img3.jpg")}
            alt="slide"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../src/assets/img4.jpg")}
            alt="slide"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../src/assets/img5.jpg")}
            alt="slide"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../src/assets/img6.jpeg")}
            alt="slide"
            className="swiper-image"
          />
        </SwiperSlide>
      </Swiper>
      <div className="p-4 ">
        <div className="flex flex-wrap justify-center">
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

        <Features />
      </div>
    </div>
  );
};

export default Home;
