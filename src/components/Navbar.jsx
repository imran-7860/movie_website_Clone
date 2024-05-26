import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [inputOpen, setInputOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
    setQuery("");
  };

  const handleClick = () => {
    if (!query.length) {
      setInputOpen(!inputOpen);
    }
  };

  return (
    <div className="bg-black fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="container mx-auto  p-4 flex flex-col sm:flex-row justify-between items-center ">
        <div className="mb-2 sm:mb-0 flex justify-between items-center w-full">
          <Link
            to="/"
            className="md:text-2xl text-xl px-3 py-2 rounded hover:text-red-700 hover:bg-gray-700 font-semibold"
          >
            MovieDB
          </Link>
          <div onClick={() => setOpen(!open)} className="md:hidden ">
            <MdMenu />
          </div>
        </div>

       {open &&  <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 bg-transparent w-full sm:w-auto"
        >
          <div className="flex gap-x-2 sm:gap-x-6">
            <Link
              to="/popular"
              className="px-3 py-2 rounded hover:bg-gray-700 font-medium"
            >
              Popular
            </Link>
            <Link
              to="/top-rated"
              className="px-3 py-2 rounded hover:bg-gray-700 font-medium whitespace-nowrap"
            >
              Top Rated
            </Link>
            <Link
              to="/upcoming"
              className="px-3 py-2 rounded hover:bg-gray-700 font-medium"
            >
              Upcoming
            </Link>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Movie Here.."
              className={` rounded-full border-b h-9  duration-500 border-gray-700 outline-none  text-black focus:bg-gray-200 ${
                inputOpen ? "md:w-60 w-30 md:px-4 px-3  bg-gray-300 " : " w-0"
              }  `}
            />

            <button
              type="submit"
              onClick={handleClick}
              className="w-9 h-9 bg-red-800 text-white rounded-full font-medium flex justify-center items-center"
            >
              {inputOpen && query.length < 1 ? <IoClose /> : <FaSearch />}
            </button>
          </div>
        </form>}
      </nav>
    </div>
  );
};

export default Navbar;


