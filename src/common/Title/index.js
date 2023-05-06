import { StyledSubtitle, StyledTitle } from "./styled";

export const Title = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

export const Subtitle = ({ subtitle }) => (
  <StyledSubtitle>{subtitle}</StyledSubtitle>
);
