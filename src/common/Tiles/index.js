import { Genres, GenresDetails } from "./Genres";
import { MovieImage, MovieDetailsImage } from "./Images";
import { AdditionalInfo, MainInfo, MainInfoDetails } from "./Info";
import { DetailsRating, Rating } from "./Rating";
import {
  MovieDescription,
  MovieDetailsDescription,
  Movie,
  Overview,
  MovieDetails,
} from "./styled";

export const MovieTile = ({
  poster,
  title,
  year,
  vote,
  votes,
  genres,
  size,
}) => (
  <Movie>
    <MovieImage poster={poster} size={size} />
    <MovieDescription>
      <MainInfo title={title} year={year} />
      <Genres genres={genres} />
      <Rating vote={vote} votes={votes} />
    </MovieDescription>
  </Movie>
);

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
  size,
}) => (
  <MovieDetails>
    <MovieDetailsImage poster={poster} size={size} />
    <MovieDetailsDescription>
      <MainInfoDetails title={title} year={year} />
      <AdditionalInfo production={production} release={release} />
      <GenresDetails genres={genres} />
      <DetailsRating vote={vote} votes={votes} />
    </MovieDetailsDescription>
    <Overview>{overview}</Overview>
  </MovieDetails>
);
