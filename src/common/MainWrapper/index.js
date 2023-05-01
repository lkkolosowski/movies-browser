import { PageWrapper } from "./styled";

export const MainWrapper = ({ content }) => (
  <PageWrapper>{content}</PageWrapper>
);

export const MainBackdropWrapper = ({ content }) => (
  <PageWrapper backdrop>{content}</PageWrapper>
);
