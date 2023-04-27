import { Information, Poster, StyledTile, Title, Year } from "./styled";

const Tile = ({ src, title, year }) => (
  <StyledTile>
    <Poster src={`https://image.tmdb.org/t/p/w300${src}`} alt="poster" />
    <Information>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Information>
  </StyledTile>
);

export default Tile;
