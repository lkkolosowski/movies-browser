import { StyledIcon, Wrapper } from "./styled";
import { MainWrapper } from "../MainWrapper";

const Loader = () => (
  <MainWrapper content={
    <Wrapper>
      <StyledIcon />
    </Wrapper>
  } />
);

export default Loader;