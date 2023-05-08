import {
  Wrapper,
  Button,
  StyledVector,
  ButtonText,
  Text,
  PageText,
} from "./styled";

export const Pagination = ({toPrevPage, toNextPage, pageNumber, totalPages, toFirstPage, toLastPage}) => {
  return (
    <Wrapper>
      <Button onClick={toFirstPage}>
        <StyledVector />
        <StyledVector mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={toPrevPage}>
        <StyledVector />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Text>Page</Text>
      <PageText>{pageNumber}</PageText>
      <Text>of</Text>
      <PageText>{totalPages}</PageText>
      <Button onClick={toNextPage}>
        <ButtonText>Next</ButtonText>
        <StyledVector right="true" />
      </Button>
      <Button onClick={toLastPage}>
        <ButtonText>Last</ButtonText>
        <StyledVector right="true" />
        <StyledVector right="true" mobile="true" />
      </Button>
    </Wrapper>
  );
};
