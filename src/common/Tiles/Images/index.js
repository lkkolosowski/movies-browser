import { Poster, Wrapper } from "./styled";

export const MovieImage = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/w300";

  return (
    <Wrapper>
      <Poster noPoster />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};
