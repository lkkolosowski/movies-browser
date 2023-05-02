import { toMovie } from "../../../routes";
import { Poster, StyledLink, Wrapper } from "./styled";


export const MovieImage = ({ poster, id }) => {
  const URL = `https://image.tmdb.org/t/p/w300`;

  return (
    <StyledLink to={toMovie({ id: id })}>
    <Wrapper>
      <Poster noPoster />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
    </StyledLink>
  );
};

export const MovieDetailsImage = ({ poster }) => {
  const URL = `https://image.tmdb.org/t/p/w500`;

  return (
    <Wrapper movieDetails>
      <Poster noPoster />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};
