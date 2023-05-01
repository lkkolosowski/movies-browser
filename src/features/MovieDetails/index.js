import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMovieId,
  selectDetails,
  selectStatus,
} from "../movieDetailsSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieDetailsTile } from "../../common/Tiles";
import Loader from "../../common/Loader";
import Backdrop from "./Backdrop";

const MovieDetails = () => {
  const URL = "https://image.tmdb.org/t/p/original";
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieId({ movieId: id }));
  }, [id, dispatch]);

  const status = useSelector(selectStatus);
  const details = useSelector(selectDetails);

  if (status !== "success") {
    return <Loader />;
  }
  return (
    <>
      {details.backdrop_path && (
        <Backdrop
          background={`${URL}${details.backdrop_path}`}
          title={details.original_title}
          vote={details.vote_average}
          votes={details.vote_count}
        />
      )}

      <MainWrapper
        content={
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
        }
      />
    </>
  );
};

export default MovieDetails;
