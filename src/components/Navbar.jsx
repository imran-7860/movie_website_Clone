import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import ModelSidePanel from "./ModelSidePanel";

const Navbar2 = () => {
  const [query, setQuery] = useState("");
  const [inputOpen, setInputOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      setOpen(false);
      navigate(`/search/${query}`);
    }
    setQuery("");
  };

  const handleClick = () => {
    if (!query.length) {
      setInputOpen(!inputOpen);
    }
    setOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 z-20 w-full text-white ">
      <nav>
        <div className="bg-black ">
          <div
            className={` w-full flex justify-between items-center  p-4 container mx-auto md:px-0`}
          >
            <Link
              to="/"
              className="px-3 py-2 text-xl font-semibold rounded md:text-2xl hover:text-red-700 "
            >
              MovieDB
            </Link>

            <div className={` md:flex justify-center items-center space-x-4`}>
              <div className="flex flex-col items-center justify-center w-full bg-transparent sm:flex-row sm:w-auto">
                <div className="hidden gap-x-2 md:flex">
                  <Link
                    to="/popular"
                    className="px-3 py-2 font-medium rounded hover:bg-gray-700"
                  >
                    Popular
                  </Link>
                  <Link
                    to="/top-rated"
                    className="px-3 py-2 font-medium rounded hover:bg-gray-700 whitespace-nowrap"
                  >
                    Top Rated
                  </Link>
                  <Link
                    to="/upcoming"
                    className="px-3 py-2 font-medium rounded hover:bg-gray-700"
                  >
                    Upcoming
                  </Link>
                </div>
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-4 mt-2 sm:mt-0 md:gap-2"
                >
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Movie Here.."
                    className={` rounded-full border-b h-9  duration-500 border-gray-700 outline-none  text-black focus:bg-gray-200 ${
                      inputOpen
                        ? "md:w-60 sm:w-30 md:px-4 px-3 w-28 bg-gray-300 "
                        : " w-0"
                    }  `}
                  />

                  <button
                    type="submit"
                    onClick={handleClick}
                    className="flex items-center justify-center font-medium text-white rounded-full md:bg-red-800 md:w-9 md:h-9"
                  >
                    {inputOpen && query.length < 1 ? <IoClose /> : <FaSearch />}
                  </button>
                  <div
                    onClick={() => setOpen(!open)}
                    className="text-2xl cursor-pointer md:hidden"
                  >
                    {open ? <IoClose className="text-red-500" /> : <MdMenu />}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <ModelSidePanel open={open} setOpen={setOpen} />
        </div>
        {/* */}
      </nav>
    </header>
  );
};

export default Navbar2;
