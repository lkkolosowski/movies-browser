import { StyledIcon, Wrapper, Title } from "./styled";
import { MainWrapper } from "../MainWrapper"
import { useQueryParameter } from "../../features/queryParameters";
import { searchQueryParamName } from "../../features/queryParametersName";

export const NoResults = () => {

  const query = useQueryParameter(searchQueryParamName);

  return (
    <MainWrapper
      content={
        <Wrapper>
          <Title>
            Sorry, there are no results for “{query}”
          </Title>
          <StyledIcon />
        </Wrapper>
      }
    />
  );
};
