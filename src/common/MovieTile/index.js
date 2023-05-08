import { toMovie } from "../../routes";
import { Genres } from "../Genres";
import { MovieImage } from "../Images";
import { MainInfo } from "../Info";
import { Rating } from "../Rating";
import { MovieDescription, Movie, StyledLink } from "./styled";

export const MovieTile = ({
  poster,
  title,
  year,
  vote,
  votes,
  genres,
  id,
}) => (
  <StyledLink to={toMovie({ id: id })}>
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
  </StyledLink>
);
