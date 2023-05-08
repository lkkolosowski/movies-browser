import {
  StyledPagination,
  Wrapper,
  Button,
  StyledVector,
  ButtonText,
  Text,
  PageText,
} from "./styled";

export const Pagination = ({
  toPrevPage,
  toNextPage,
  pageNumber,
  totalPages,
  toFirstPage,
  toLastPage,
}) => {
  return (
    <StyledPagination>
      <Button disabled={pageNumber === 1} onClick={toFirstPage}>
        <StyledVector />
        <StyledVector mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={pageNumber === 1} onClick={toPrevPage}>
        <StyledVector />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Wrapper>
        <Text>Page</Text>
        <PageText>{pageNumber}</PageText>
        <Text>of</Text>
        <PageText>{totalPages}</PageText>
      </Wrapper>
      <Button disabled={pageNumber === totalPages} onClick={toNextPage}>
        <ButtonText>Next</ButtonText>
        <StyledVector right="true" />
      </Button>
      <Button disabled={pageNumber === totalPages} onClick={toLastPage}>
        <ButtonText>Last</ButtonText>
        <StyledVector right="true" />
        <StyledVector right="true" mobile="true" />
      </Button>
    </StyledPagination>
  );
};
