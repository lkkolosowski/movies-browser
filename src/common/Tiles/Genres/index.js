import { useSelector } from "react-redux";
import { Wrapper, Genre } from "./styled";
import { selectGenres } from "../../../features/moviesListSlice";
import { getGenresNames } from "./utils";

export const Genres = ({ genres }) => {
  const genresId = useSelector(selectGenres);

  return (
    genres && (
      <Wrapper>
        {getGenresNames({ ids: genres, id: genresId }).map((genre) => (
          <Genre key={genre}>{genre}</Genre>
        ))}
      </Wrapper>
    )
  );
};
