import {
  Star,
  Wrapper,
  Vote,
  Votes,
  Total,
  DetailsRatingWrapper,
  BackdropRatingWrapper,
  Average,
  Count,
} from "./styled";
import { toDecimal } from "./utils";

export const Rating = ({ vote, votes }) => (
  <Wrapper>
    <Star />
    <Vote>{toDecimal(vote)}</Vote>
    <Votes>
      {votes} {votes === 1 ? "vote" : "votes"}
    </Votes>
  </Wrapper>
);

export const BackdropRating = ({ vote, votes }) => (
  <BackdropRatingWrapper>
    <Star backdrop="true" />
    <Average backdrop>{toDecimal(vote)}</Average>
    <Total backdrop>/ 10</Total>
    <Count backdrop>
      {votes} {votes === 1 ? "vote" : "votes"}
    </Count>
  </BackdropRatingWrapper>
);

export const DetailsRating = ({ vote, votes }) => (
  <DetailsRatingWrapper>
    {vote ? (
      <>
        <Star />
        <Average>{toDecimal(vote)}</Average>
        <Total>/ 10</Total>
        <Count>
          {votes} {votes === 1 ? "vote" : "votes"}
        </Count>
      </>
    ) : (
      <>No votes yet</>
    )}
  </DetailsRatingWrapper>
);
