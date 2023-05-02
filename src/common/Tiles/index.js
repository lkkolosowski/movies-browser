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
  id,
}) => (
  <Movie>
    <MovieImage id={id} poster={poster} />
    <MovieDescription>
      <div>
        <MainInfo title={title} year={year} />
        <Genres genres={genres} />
      </div>
      <div>
        <Rating vote={vote} votes={votes} />
      </div>
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
