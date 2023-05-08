import { useSelector } from "react-redux";
import { Wrapper, Genre } from "./styled";
import { getNames, extractNames } from "./utils";
import { selectPersonGenres } from "../../features/personSlice";
import { selectGenres } from "../../features/moviesListSlice";

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

export const GenresPerson = ({ genres }) => {
  const genresId = useSelector(selectPersonGenres);

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