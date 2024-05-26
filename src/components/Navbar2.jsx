import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar2 = () => {
  return (
    <div className="z-20 text-white bg-black fixed top-0 left-0 w-full ">
      <nav className="container mx-auto  p-4 ">
        <div className="md:hidden">
          <MobilePanel />
        </div>
        <div className="hidden md:block ">
          <DestopPanel />
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;

const MobilePanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className={`h-16 w-full flex justify-between items-center `}>
        <Link
          to="/"
          className="md:text-2xl text-xl px-3 py-2 rounded hover:text-red-700 hover:bg-gray-700 font-semibold"
        >
          MovieDB
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl cursor-pointer"
        >
          {open ? <IoClose /> : <MdMenu />}
        </div>
      </div>
      <div className={`${open ? "-translate-x-o" : "-translate-x-full"} duration-500`}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/popular"}>Popular</Link>
          </li>
          <li>
            <Link to={"/top-rated"}>Top Rated</Link>
          </li>
          <li>
          
            <Link to={"/upcoming"}>Upcoming</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DestopPanel = () => {
  return <div className={``}>destop</div>;
};
