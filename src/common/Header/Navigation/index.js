import { toMovies, toPeople } from "../../../routes";
import { StyledNavigation, Item, StyledNavLink } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <Item>
      <StyledNavLink movie="true" to={toMovies()}>MOVIES</StyledNavLink>
    </Item>
    <Item>
      <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
    </Item>
  </StyledNavigation>
);

export default Navigation;
