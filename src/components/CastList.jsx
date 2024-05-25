import React from 'react';

const CastList = ({ cast }) => {
  return (
    <div className="flex flex-wrap p-4">
      {cast.map((member) => (
        <div key={member.cast_id} className="w-24 m-2">
          <img
            src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
            alt={member.name}
            className="w-full h-auto rounded"
          />
          <p className="text-center">{member.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
