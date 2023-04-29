import { Poster, Wrapper } from "./styled";

export const MovieImage = ({ posterPath }) => {
  const URL = "https://image.tmdb.org/t/p/w300";

  return (
    <Wrapper>
      <Poster noPoster />
      {posterPath && <Poster background={`${URL}${posterPath}`} />}
    </Wrapper>
  );
};
