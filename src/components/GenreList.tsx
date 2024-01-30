import useGenre, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <div>
      <ul>
        {data.map((gen) => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
