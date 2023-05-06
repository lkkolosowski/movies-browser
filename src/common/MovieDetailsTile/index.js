import { GenresDetails } from "../Genres";
import { MovieDetailsImage } from "../Images";
import { AdditionalInfo, MainInfoDetails } from "../Info";
import { DetailsRating } from "../Rating";
import { MovieDetailsDescription, Overview, MovieDetails } from "./styled";

export const MovieDetailsTile = ({
  poster,
  title,
  year,
  genres,
  vote,
  votes,
  overview,
  production,
  release,
}) => (
  <MovieDetails>
    <MovieDetailsImage poster={poster} />
    <MovieDetailsDescription>
      <MainInfoDetails title={title} year={year} />
      <AdditionalInfo production={production} release={release} />
      <GenresDetails genres={genres} />
      <DetailsRating vote={vote} votes={votes} />
    </MovieDetailsDescription>
    <Overview>{overview}</Overview>
  </MovieDetails>
);
