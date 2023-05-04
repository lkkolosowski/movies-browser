import { useSelector } from "react-redux";
import { selectMoviesList, selectStatus } from "../moviesListSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieTile } from "../../common/Tiles";
import { List, Item } from "./styled";
import { Pagination } from "../../common/Pagination";
import { Error } from "../../common/Error";
import Loader from "../../common/Loader";
import { Title } from "../../common/Title";

const MoviesList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);


  return (
    status === "loading" ?
      <Loader /> :
      status === "error" ?
        <Error /> :
        <>
          <MainWrapper
            content={
              <>
                <Title title="Popular Movies"></Title>
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
  );
};

export default MoviesList;
