import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStatus,
  selectDetails,
  selectCast,
  selectCrew,
  getDetailsForPerson,
} from "../personSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { PersonDetailsTile } from "../../common/DetailsTiles";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { Subtitle } from "../../common/Title";
import { Item, List } from "./styled";
import { MoviePersonTile } from "../../common/MovieTile";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailsForPerson({ personId: id }));
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
    <MainWrapper
      content={
        <>
          <PersonDetailsTile
            poster={details.profile_path}
            title={details.name}
            overview={details.biography}
            dateOfBirth={details.birthday}
            placeOfBirth={details.place_of_birth}
          />
          <Subtitle subtitle={`Cast - ${cast.length}`} />
          <List>
            {cast.map(
              (movie) =>
                movie.title && (
                  <Item key={movie.credit_id}>
                    <MoviePersonTile
                      id={movie.id}
                      poster={movie.poster_path}
                      title={movie.title}
                      year={movie.release_date}
                      vote={movie.vote_average}
                      votes={movie.vote_count}
                      genres={movie.genre_ids}
                    />
                  </Item>
                )
            )}
          </List>
          {crew.length > 0 && (
            <>
              <Subtitle subtitle={`Crew - ${crew.length}`} />
              <List>
                {crew.map(
                  (movie) =>
                    movie.title && (
                      <Item key={movie.credit_id}>
                        <MoviePersonTile
                          id={movie.id}
                          poster={movie.poster_path}
                          title={movie.title}
                          year={movie.release_date}
                          vote={movie.vote_average}
                          votes={movie.vote_count}
                          genres={movie.genre_ids}
                        />
                      </Item>
                    )
                )}
              </List>
            </>
          )}
        </>
      }
    />
  );
};

export default PersonDetails;
