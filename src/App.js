import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchResults from './pages/SearchResults';
import './App.css'
import Footer from './components/Footer';
import Popular from './pages/Popular';
import Navbar2 from './components/Navbar2';



const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Navbar2 />
        <Routes>
          
          
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
