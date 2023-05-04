import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMovieId,
  selectDetails,
  selectStatus,
} from "../movieDetailsSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieDetailsTile } from "../../common/MovieDetailsTile";
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

  const status = useSelector(selectStatus);
  const details = useSelector(selectDetails);

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
            <Subtitle subtitle="Cast" />
            <List>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
            </List>

            <Subtitle subtitle="Crew" />
            <List>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
              <Item><PersonTile /></Item>
            </List>
          </>
        }
      />
    </>
  );
};

export default MovieDetails;
