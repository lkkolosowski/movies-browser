import { Genres } from "./Genres";
import { MovieImage } from "./Images";
import { Rating } from "./Rating";
import { Info, Tile, Title, Year } from "./styled";

export const MovieTile = ({ posterPath, title, year }) => (
  <Tile>
    <MovieImage posterPath={posterPath} />
    <Info>
      <div>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Genres />
      </div>
      <div>
        <Rating />
      </div>
    </Info>
  </Tile>
);
