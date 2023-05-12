import { useDispatch } from "react-redux";
import { useReplaceQueryParameter } from "../../features/queryParameters";
import { pageQueryParamName } from "../../features/queryParametersName";
import {
  StyledPagination,
  Wrapper,
  Button,
  StyledVector,
  ButtonText,
  Text,
  PageText,
} from "./styled";
import { goToPage } from "../../features/moviesListSlice";

export const Pagination = ({ pageNumber, totalPages }) => {
  const dispatch = useDispatch();
  const replaceQueryParameter = useReplaceQueryParameter();

  const setPage = (currentPage) => {
    replaceQueryParameter([
      {
        key: pageQueryParamName,
        value: currentPage,
      },
    ]);
    dispatch(goToPage(currentPage));
  };

  return (
    <StyledPagination>
      <Button disabled={pageNumber === 1} onClick={() => setPage(1)}>
        <StyledVector />
        <StyledVector mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        disabled={pageNumber === 1}
        onClick={() => setPage(+pageNumber - 1)}
      >
        <StyledVector />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Wrapper>
        <Text>Page</Text>
        <PageText>{pageNumber}</PageText>
        <Text>of</Text>
        <PageText>{totalPages}</PageText>
      </Wrapper>
      <Button
        disabled={pageNumber === totalPages}
        onClick={() => setPage(+pageNumber + 1)}
      >
        <ButtonText>Next</ButtonText>
        <StyledVector right="true" />
      </Button>
      <Button
        disabled={pageNumber === totalPages}
        onClick={() => setPage(totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <StyledVector right="true" />
        <StyledVector right="true" mobile="true" />
      </Button>
    </StyledPagination>
  );
};
