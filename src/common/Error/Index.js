import { StyledNavLink } from "../Header/Navigation/styled";
import { Wrapper, ErrorIcon, Title, Subtitle, Button } from "./styled";
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
          <StyledNavLink
            to="/movies"
          >
            <Button>
              Back to home page
            </Button>
          </StyledNavLink>
        </Wrapper >
      }
    />
  );
};