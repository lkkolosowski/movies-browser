import { useSelector } from "react-redux";
import {
  selectMoviesList,
  selectStatus,
} from "../moviesListSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/Tiles";
import { Wrapper } from "./styled";
import { Pagination } from "../../common/Pagination";
import Loader from "../../common/Loader";

const MoviesList = () => {
  const movies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);

  if (status !== "success") {
    return <Loader />;
  }
  return (
    <>
      <MainWrapper
        title="Popular Movies"
        content={
          <Wrapper>
            {movies.map((movie) => (
              <li key={movie.id}>
                <MovieTile
                  poster={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  vote={movie.vote_average}
                  votes={movie.vote_count}
                  genres={movie.genre_ids}
                />
              </li>
            ))}
          </Wrapper>
        }
      />
      <Pagination />
    </>
  );
};

export default MoviesList;
