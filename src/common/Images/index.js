import { Poster, Wrapper } from "./styled";

export const MovieImage = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/w300";

  return (
    <Wrapper>
      <Poster noMovie />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};

export const DetailsImage = ({ poster }) => {
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

export const PersonListImage = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/h632";

  return (
    <Wrapper person>
      <Poster noPerson />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};