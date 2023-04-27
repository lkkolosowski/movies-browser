import { useSelector } from "react-redux";
import {
  selectPopularMovies,
  selectStatus,
} from "../../popularMoviesSlice";
import { Container } from "../../../common/Container/styled";

const MoviesListPage = () => {
  const movies = useSelector(selectPopularMovies);
  const status = useSelector(selectStatus);

  if (status !== "success") {
    return <p>{status}</p>;
  }
  return (
    <Container>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </Container>
  );
};

export default MoviesListPage;
