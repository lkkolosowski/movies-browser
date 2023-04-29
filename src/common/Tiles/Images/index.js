import { Poster, Wrapper } from "./styled";

const URL = "https://image.tmdb.org/t/p/w300";

export const MovieImage = ({ posterPath }) => {
  return (
    <Wrapper>
      <Poster noPoster />
      {posterPath && <Poster background={`${URL}${posterPath}`} />}
    </Wrapper>
  );
};
