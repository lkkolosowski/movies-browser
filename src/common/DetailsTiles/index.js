import { GenresDetails } from "../Genres";
import { DetailsImage } from "../Images";
import { AdditionalInfo, MainInfoDetails, PersonInfo } from "../Info";
import { DetailsRating } from "../Rating";
import { DetailsDescription, Overview, Details } from "./styled";

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
  <Details>
    <DetailsImage poster={poster} />
    <DetailsDescription>
      <MainInfoDetails title={title} year={year} />
      <AdditionalInfo production={production} release={release} />
      <GenresDetails genres={genres} />
      <DetailsRating vote={vote} votes={votes} />
    </DetailsDescription>
    <Overview>{overview}</Overview>
  </Details>
);

export const PersonDetailsTile = ({
  poster,
  title,
  overview,
  dateOfBirth,
  placeOfBirth,
}) => (
  <Details>
    <DetailsImage poster={poster} />
    <DetailsDescription>
      <MainInfoDetails title={title} />
      <PersonInfo dateOfBirth={dateOfBirth} placeOfBirth={placeOfBirth} />
    </DetailsDescription>
    <Overview>{overview}</Overview>
  </Details>
);
