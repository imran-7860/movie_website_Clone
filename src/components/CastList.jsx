import React from "react";
import DefaultImage from "../assets/defaultImage.png"

const CastList = ({ cast }) => {
  return (
    <div className="flex flex-wrap p-4">
      {cast.map((member) => (
        <div key={member.cast_id} className="w-24 m-2">
          <img
            src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
            alt={member.name}
            className="w-full h-auto rounded"
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if the default image also fails
              e.target.src =DefaultImage; // Replace with the path to your default image
            }}
          />

          <p className="text-center">{member.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
