import React from "react";
import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <div>
      <ul>
        {genres.map((gen) => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
