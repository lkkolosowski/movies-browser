import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMovieId,
  selectDetails,
  selectStatus,
} from "../movieDetailsSlice";
import {
  MainBackdropWrapper,
  MainWrapper,
} from "../../common/MainWrapper";
import { Backdrop, BackdropContent, BackdropWrapper, Title } from "./styled";
import { BackdropRating } from "../../common/Tiles/Rating";
import { MovieDetailsTile } from "../../common/Tiles";
import Loader from "../../common/Loader";

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
        <BackdropWrapper>
          <MainBackdropWrapper
            content={
              <Backdrop background={`${URL}${details.backdrop_path}`}>
                <BackdropContent>
                  <Title>{details.original_title}</Title>
                  {details.vote_count && (
                    <BackdropRating
                      vote={details.vote_average}
                      votes={details.vote_count}
                    />
                  )}
                </BackdropContent>
              </Backdrop>
            }
          />
        </BackdropWrapper>
      )}

      <MainWrapper
        content={
          <MovieDetailsTile
            size={"w500"}
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
