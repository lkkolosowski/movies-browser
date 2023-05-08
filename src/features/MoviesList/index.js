import { useDispatch, useSelector } from "react-redux";
import { goToPage, selectMoviesList, selectPage, selectStatus, selectTotalPages } from "../moviesListSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/MovieTile";
import { Pagination } from "../../common/Pagination";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { Title } from "../../common/Title";
import { List, Item } from "./styled";
import { useEffect } from "react";

const MoviesList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);

  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(goToPage({ page: 1 }));
  }, [dispatch]);

  return (
    status === "loading" ?
    <Loader /> :
    status === "error" ?
    <Error /> :
    <>
      <MainWrapper
        content={
          <>
            <Title title="Popular Movies" />
            <List>
              {popularMovies.map((movie) => (
                <Item key={movie.id}>
                  <MovieTile
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date}
                    vote={movie.vote_average}
                    votes={movie.vote_count}
                    genres={movie.genre_ids}
                  />
                </Item>
              ))}
            </List>
          </>
        }
      />
      <Pagination
        toNextPage={() => dispatch(goToPage({ page: pageNumber + 1 }))}
        toPrevPage={() => dispatch(goToPage({ page: pageNumber - 1 }))}
        pageNumber={pageNumber}
        totalPages={totalPages}
        toFirstPage={() => dispatch(goToPage({ page: 1 }))}
        toLastPage={() => dispatch(goToPage({ page: totalPages }))}
      />
    </>
  );
};

export default MoviesList;
