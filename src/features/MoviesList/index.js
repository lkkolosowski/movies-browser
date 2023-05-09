import { useSelector, useDispatch } from "react-redux";
import { selectMoviesList, selectStatus, selectTotalResults, setQuery } from "../moviesListSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/Tiles";
import { List, Item } from "./styled";
import { Pagination } from "../../common/Pagination";
import { Error } from "../../common/Error";
import Loader from "../../common/Loader";
import { Title } from "../../common/Title";
import { useQueryParameter } from "../queryParameters";
import { searchQueryParamName } from "../queryParametersName";
import { useEffect } from "react";

const MoviesList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);

  const query = useQueryParameter(searchQueryParamName);
  const totalResults = useSelector(selectTotalResults);
  const dispatch = useDispatch();

  useEffect(() => {
    query ? dispatch(setQuery({ query: query })) : dispatch(setQuery({ query: "" }));
  }, [query, dispatch]);

  if (status !== "success") {
    return <Loader />;
  } else { <Error /> };

  return (
    <>
      {totalResults === 0 ?
        <Error /> :
        (<><MainWrapper
          content={
            <>
              <Title title={
                query ? `Search results for "${query}" (${totalResults})` :
                  `Popular Movies`
              }></Title>
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
          <Pagination />
        </>
        )}
    </>
  );
};

export default MoviesList;
