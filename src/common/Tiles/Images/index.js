import { Poster, NoPoster, Wrapper } from "./styled";

const URL = "https://image.tmdb.org/t/p/w300";

export const MovieImage = ({ posterPath }) => {
  return (
    <Wrapper>
      {posterPath ? <Poster background={`${URL}${posterPath}`} /> : <NoPoster />}
    </Wrapper>
  );
};
