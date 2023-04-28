import {
  Wrapper,
  StyledHeader,
  MovieBrowser,
  HeaderButtons,
  Title,
  Input,
  Video,
  Search,
  Loupe,
} from "./styled";
import Navigation from "./Navigation";

const Header = () => (
  <Wrapper>
    <StyledHeader>
      <HeaderButtons>
        <MovieBrowser>
          <Video />
          <Title>Movies Browser</Title>
        </MovieBrowser>
        <Navigation />
      </HeaderButtons>
      <Search>
        <Loupe />
        <Input placeholder="Search for movies..." />
      </Search>
    </StyledHeader>
  </Wrapper>
);

export default Header;
