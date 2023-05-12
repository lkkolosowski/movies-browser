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
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../queryParametersName";
import { useEffect } from "react";

const MoviesList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);

  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(pageQueryParamName);
  const totalResults = useSelector(selectTotalResults);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuery(query
      ? { query: query }
      : { query: "" }));
    dispatch(goToPage(page
      ? { page: page }
      : { page: 1 }));
  }, [query, page, dispatch]);

  return (
    status === "loading" ?
    <Loader /> :
    status === "error" ?
    <Error /> :
    <>
      {popularMovies.length === 0 ?
      <Error /> : totalResults === 0 ?
      <NoResults /> :
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
            <Pagination pageNumber={pageNumber} totalPages={totalPages} />
          </>
        }
      />
      }
    </>
  );
};

export default MoviesList;
