import { Image, Video, Wrapper } from "./styled";

export const MovieImage = ({ posterPath }) => {
  const URL = "https://image.tmdb.org/t/p/w300";

  return (
    <Wrapper>
      {posterPath ? (
        <Image alt="poster" src={`${URL}${posterPath}`} />
      ) : (
        <Video />
      )}
    </Wrapper>
  );
};
