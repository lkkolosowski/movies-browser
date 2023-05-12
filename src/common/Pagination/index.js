import { useState } from "react";
import {
  StyledPagination,
  Wrapper,
  Button,
  StyledVector,
  ButtonText,
  Text,
  PageText,
} from "./styled";
import { usePages } from "./usePages";

export const Pagination = ({ pageNumber, totalPages }) => {
  const [page, setPage] = useState("");
  usePages(page);

  const currentPage = parseInt(pageNumber);

  return (
    <StyledPagination>
      <Button disabled={currentPage === 1} onClick={() => setPage(1)}>
        <StyledVector />
        <StyledVector mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <StyledVector />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Wrapper>
        <Text>Page</Text>
        <PageText>{currentPage}</PageText>
        <Text>of</Text>
        <PageText>{totalPages}</PageText>
      </Wrapper>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
      >
        <ButtonText>Next</ButtonText>
        <StyledVector right="true" />
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => setPage(totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <StyledVector right="true" />
        <StyledVector right="true" mobile="true" />
      </Button>
    </StyledPagination>
  );
};
