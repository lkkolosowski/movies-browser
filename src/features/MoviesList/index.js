import { useDispatch, useSelector } from "react-redux";
import {
  goToPage,
  selectMoviesList,
  selectPage,
  selectStatus,
  selectTotalPages,
  selectTotalResults,
  setQuery,
} from "../moviesListSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/MovieTile";
import { Pagination } from "../../common/Pagination";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResults";
import { Title } from "../../common/Title";
import { List, Item } from "./styled";
import { useQueryParameter } from "../queryParameters";
import { searchQueryParamName } from "../queryParametersName";
import { useEffect } from "react";

const MoviesList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);

  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const query = useQueryParameter(searchQueryParamName);
  const totalResults = useSelector(selectTotalResults);

  const dispatch = useDispatch();

  useEffect(() => {
    query
      ? dispatch(setQuery({ query: query }))
      : dispatch(setQuery({ query: "" }));
    dispatch(goToPage({ page: 1 }));
  }, [query, dispatch]);

  return status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <Error />
  ) : (
    <>
      {totalResults === 0 ? (
        <NoResults />
      ) : (
        <MainWrapper
          content={
            <>
              <Title
                title={
                  query
                    ? `Search results for "${query}" (${totalResults})`
                    : `Popular Movies`
                }
              ></Title>
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
              <Pagination
                toNextPage={() =>
                  dispatch(goToPage({ page: pageNumber + 1 }))
                }
                toPrevPage={() =>
                  dispatch(goToPage({ page: pageNumber - 1 }))
                }
                pageNumber={pageNumber}
                totalPages={totalPages}
                toFirstPage={() => dispatch(goToPage({ page: 1 }))}
                toLastPage={() => dispatch(goToPage({ page: totalPages }))}
              />
            </>
          }
        />
      )}
    </>
  );
};

export default MoviesList;
