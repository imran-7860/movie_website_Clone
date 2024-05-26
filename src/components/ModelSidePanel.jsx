import React from "react";
import { Link } from "react-router-dom";

const ModelSidePanel = ({ open, setOpen }) => {
  return (
    <div
      className={`w-full h-screen max-w-sm p-4 bg-black duration-500  ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="pl-3 space-y-3">
        <li onClick={() => setOpen(false)}>
          <Link to={"/"} className="px-4 py-2 hover:text-red-600">
            Home
          </Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to={"/popular"} className="px-4 py-2 hover:text-red-600">
            Popular
          </Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to={"/top-rated"} className="px-4 py-2 hover:text-red-600">
            
            Top Rated
          </Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to={"/upcoming"} className="px-4 py-2 hover:text-red-600">
            Upcoming
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ModelSidePanel;