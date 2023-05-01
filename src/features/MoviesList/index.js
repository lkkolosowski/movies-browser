import { useSelector } from "react-redux";
import { selectMoviesList, selectStatus } from "../moviesListSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/Tiles";
import { StyledLink, Wrapper } from "./styled";
import { Pagination } from "../../common/Pagination";
import Loader from "../../common/Loader";
import { Title } from "../../common/Title";

const MoviesList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);

  if (status !== "success") {
    return <Loader />;
  }
  return (
    <>
      <MainWrapper
        content={
          <>
            <Title title="Popular Movies"></Title>
            <Wrapper>
              {popularMovies.map((movie) => (
                <li key={movie.id}>
                  <StyledLink to={`/movie/${movie.id}`}>
                    <MovieTile
                      size="w300"
                      poster={movie.poster_path}
                      title={movie.title}
                      year={movie.release_date}
                      vote={movie.vote_average}
                      votes={movie.vote_count}
                      genres={movie.genre_ids}
                    />
                  </StyledLink>
                </li>
              ))}
            </Wrapper>
          </>
        }
      />
      <Pagination />
    </>
  );
};

export default MoviesList;
