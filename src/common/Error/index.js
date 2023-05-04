import { toMovies } from "../../routes";
import { Wrapper, ErrorIcon, Title, Subtitle, StyledLink } from "./styled";
import { MainWrapper } from "../MainWrapper";

export const Error = () => {
  return (
    <MainWrapper
      content={
        <Wrapper>
          <ErrorIcon />
          <Title>
            Ooops! Something went wrong...
          </Title>
          <Subtitle>
            Please check your network connection and try again
          </Subtitle>
          <StyledLink to={toMovies()}>
              Back to home page
          </StyledLink>
        </Wrapper >
      }
    />
  );
};