import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMovieId,
  selectCast,
  selectCrew,
  selectDetails,
  selectStatus,
} from "../movieDetailsSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieDetailsTile } from "../../common/DetailsTiles";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { Backdrop } from "./Backdrop";
import { Subtitle } from "../../common/Title";
import { PersonTile } from "../../common/PersonTile";
import { Item, List } from "./styled";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieId({ movieId: id }));
  }, [id, dispatch]);

  const details = useSelector(selectDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);

  return (
    status === "loading" ?
    <Loader /> :
    status === "error" ?
    <Error /> :
    <>
      {details.backdrop_path && (
        <Backdrop
          background={details.backdrop_path}
          title={details.original_title}
          vote={details.vote_average}
          votes={details.vote_count}
        />
      )}

      <MainWrapper
        content={
          <>
            <MovieDetailsTile
              poster={details.poster_path}
              title={details.original_title}
              year={details.release_date}
              genres={details.genres}
              vote={details.vote_average}
              votes={details.vote_count}
              overview={details.overview}
              production={details.production_countries}
              release={details.release_date}
            />
            {cast.length > 0 && (
              <>
                <Subtitle subtitle="Cast" />
                <List>
                  {cast.map((person) => (
                    <Item key={person.credit_id}>
                      <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.character}
                        poster={person.profile_path}
                      />
                    </Item>
                  ))}
                </List>
              </>
            )}
            {crew.length > 0 && (
              <>
                <Subtitle subtitle="Crew" />
                <List>
                  {crew.map((person) => (
                    <Item key={person.credit_id}>
                      <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.job}
                        poster={person.profile_path}
                      />
                    </Item>
                  ))}
                </List>
              </>
            )}
          </>
        }
      />
    </>
  );
};

export default MovieDetails;
