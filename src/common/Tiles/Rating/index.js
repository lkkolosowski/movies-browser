import { Star, Wrapper, Vote, Votes } from "./styled";
import { convertToDecimal } from "./utils";

export const Rating = ({ vote, votes }) => (
  <Wrapper>
    <Star />
    <Vote>{convertToDecimal(vote)}</Vote>
    <Votes>{votes} votes</Votes>
  </Wrapper>
);
