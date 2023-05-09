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
import SearchEngine from "./Search";

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
        <SearchEngine />
      </Search>
    </StyledHeader>
  </Wrapper>
);

export default Header;
