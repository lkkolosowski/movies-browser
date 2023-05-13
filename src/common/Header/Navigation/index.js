import { StyledNavigation, Item, StyledNavLink } from "./styled";

const Navigation = () => (
    <StyledNavigation>
      <Item>
        <StyledNavLink movie="true" to="/movies">MOVIES</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="/people">PEOPLE</StyledNavLink>
      </Item>
    </StyledNavigation>
);

export default Navigation;
