import { useSelector } from "react-redux";
import { selectPopularMovies, selectStatus } from "../popularMoviesSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/Tiles";
import { Wrapper } from "./styled";

const MoviesList = () => {
  const movies = useSelector(selectPopularMovies);
  const status = useSelector(selectStatus);

  if (status !== "success") {
    return <p>{status}</p>;
  }
  return (
    <MainWrapper
    title="Popular Movies"
      content={
        <Wrapper>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieTile
                posterPath={movie.poster_path}
                title={movie.title}
                year={movie.release_date.split("-")[0]}
              />
            </li>
          ))}
        </Wrapper>
      }
    />
  );
};

export default MoviesList;
