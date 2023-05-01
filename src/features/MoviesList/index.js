import { useSelector } from "react-redux";
import { selectMoviesList, selectStatus } from "../moviesListSlice";
import { toMovie } from "../../routes";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/Tiles";
import { StyledLink, List, Item } from "./styled";
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
            <List>
              {popularMovies.map((movie) => (
                <Item key={movie.id}>
                  <StyledLink to={toMovie({ id: movie.id })}>
                    <MovieTile
                      poster={movie.poster_path}
                      title={movie.title}
                      year={movie.release_date}
                      vote={movie.vote_average}
                      votes={movie.vote_count}
                      genres={movie.genre_ids}
                    />
                  </StyledLink>
                </Item>
              ))}
            </List>
          </>
        }
      />
      <Pagination />
    </>
  );
};

export default MoviesList;
