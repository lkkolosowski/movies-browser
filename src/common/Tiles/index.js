import { Genres } from "./Genres";
import { MovieImage } from "./Images";
import { MainInfo } from "./Info";
import { Rating } from "./Rating";
import { Description, Tile } from "./styled";

export const MovieTile = ({ posterPath, title, year, vote, votes, genres }) => (
  <Tile>
    <MovieImage posterPath={posterPath} />
    <Description>
      <MainInfo title={title} year={year} />
      <Genres genres={genres} />
      <Rating vote={vote} votes={votes} />
    </Description>
  </Tile>
);
