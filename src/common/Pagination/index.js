import {
  Wrapper,
  Button,
  StyledVector,
  ButtonText,
  Text,
  PageText,
} from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <StyledVector />
        <StyledVector mobile />
        <ButtonText>First</ButtonText>
      </Button>
      <Button>
        <StyledVector />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Text>Page</Text>
      <PageText>1</PageText>
      <Text>of</Text>
      <PageText>500</PageText>
      <Button>
        <ButtonText>Next</ButtonText>
        <StyledVector right />
      </Button>
      <Button>
        <ButtonText>Last</ButtonText>
        <StyledVector right />
        <StyledVector right mobile />
      </Button>
    </Wrapper>
  );
};
