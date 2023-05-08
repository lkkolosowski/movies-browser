import { toMovie } from "../../routes";
import { Poster, StyledLink, Wrapper } from "./styled";

export const MovieImage = ({ poster, id }) => {
  const URL = "https://image.tmdb.org/t/p/w300";

  return (
    <StyledLink to={toMovie({ id: id })}>
      <Wrapper>
        <Poster noMovie />
        {poster && <Poster background={`${URL}${poster}`} />}
      </Wrapper>
    </StyledLink>
  );
};

export const MovieDetailsImage = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Wrapper movieDetails>
      <Poster noMovie />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};

export const PersonImage = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/w185";

  return (
    <Wrapper person>
      <Poster noPerson />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};
