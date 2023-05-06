import { StyledIcon, Wrapper } from "./styled";
import { MainWrapper } from "../MainWrapper";

export const Loader = () => (
  <MainWrapper
    content={
      <Wrapper>
        <StyledIcon />
      </Wrapper>
    }
  />
);
