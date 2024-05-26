import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
    setQuery("");
  };

  return (
    <nav className="container mx-auto bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="mb-2 sm:mb-0">
        <Link to="/" className="text-2xl px-3 py-2 rounded hover:bg-gray-700">
          MovieDB
        </Link>
      </div>
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 bg-transparent w-full sm:w-auto"
      >
        <div className="flex gap-4 sm:gap-10">
          <Link to="/popular" className="px-3 py-2 rounded hover:bg-gray-700">
            Popular
          </Link>
          <Link to="/top-rated" className="px-3 py-2 rounded hover:bg-gray-700">
            Top Rated
          </Link>
          <Link to="/upcoming" className="px-3 py-2 rounded hover:bg-gray-700">
            Upcoming
          </Link>
        </div>
        <div className="flex mt-2 sm:mt-0">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="input px-3 py-2 rounded-l border border-gray-700 outline-none"
          />
          <button
            type="submit"
            className="px-3 py-2 bg-blue-500 text-white rounded-r"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
