import { Poster, Wrapper } from "./styled";

export const MovieImage = ({ poster }) => {
  const URL = `https://image.tmdb.org/t/p/w300`;

  return (
    <Wrapper>
      <Poster noPoster />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
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
