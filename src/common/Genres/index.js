import { useSelector } from "react-redux";
import { Wrapper, Genre } from "./styled";
import { selectGenres } from "../../features/moviesListSlice";
import { getNames, extractNames } from "./utils";

export const Genres = ({ genres }) => {
  const genresId = useSelector(selectGenres);

  return (
    genres && (
      <Wrapper>
        {getNames(genres, genresId).map((genre) => (
          <Genre key={genre}>{genre}</Genre>
        ))}
      </Wrapper>
    )
  );
};

export const GenresDetails = ({ genres }) => {
  return (
    genres && (
      <Wrapper details>
        {extractNames(genres).map((genre) => (
          <Genre details key={genre}>{genre}</Genre>
        ))}
      </Wrapper>
    )
  );
};
