import { Poster, Wrapper } from "./styled";

export const MovieImage = ({ poster, size }) => {
  const URL = `https://image.tmdb.org/t/p/${size}`;

  return (
    <Wrapper>
      <Poster noPoster />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};

export const MovieDetailsImage = ({ poster, size }) => {
  const URL = `https://image.tmdb.org/t/p/${size}`;

  return (
    <Wrapper movieDetails>
      <Poster noPoster />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};
