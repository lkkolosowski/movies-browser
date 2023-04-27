import { useSelector } from "react-redux";
import { selectPopularMovies, selectStatus } from "../popularMoviesSlice";
import { Container } from "../../common/Container/styled";
import { Title } from "./styled";
import Tiles from "../../common/Tiles";

const MoviesList = () => {
  const movies = useSelector(selectPopularMovies);
  const status = useSelector(selectStatus);

  if (status !== "success") {
    return <p>{status}</p>;
  }
  return (
    <Container>
      <Title>Popular Movies</Title>
      <Tiles movies={movies} />
    </Container>
  );
};

export default MoviesList;
