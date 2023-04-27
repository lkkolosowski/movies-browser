import Tile from "./Tile";
import { StyledTiles } from "./styled";

const Tiles = ({ movies }) => (
  <StyledTiles>
    {movies.map((movie) => (
      <li key={movie.id}>
        <Tile src={movie.poster_path} title={movie.title} year={movie.release_date.split("-")[0]} />
      </li>
    ))}
  </StyledTiles>
);

export default Tiles;
