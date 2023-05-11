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

  const page = parseInt(pageNumber);

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
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        <StyledVector />
        <StyledVector mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        <StyledVector />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Wrapper>
        <Text>Page</Text>
        <PageText>{page}</PageText>
        <Text>of</Text>
        <PageText>{totalPages}</PageText>
      </Wrapper>
      <Button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        <ButtonText>Next</ButtonText>
        <StyledVector right="true" />
      </Button>
      <Button
        disabled={page === totalPages}
        onClick={() => setPage(totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <StyledVector right="true" />
        <StyledVector right="true" mobile="true" />
      </Button>
    </StyledPagination>
  );
};
