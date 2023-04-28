import { PageWrapper, Title } from "./styled";

export const MainWrapper = ({ content, title }) => (
    <PageWrapper>
      <Title>
        {title}
      </Title>
      {content}
    </PageWrapper>
);