import { Wrapper, MovieBrowser, Title, Navi, NaviLi, Input, StyledNavLink } from "./styled";
import { ReactComponent as Video } from '../../ImagesSVG/Video.svg';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import MoviesListPage from "../../feauters/Movies/MoviesListPage";
import PeopleListPage from "../../feauters/People/PeopleListPage";


export const Header = () => (
    <HashRouter>
        <Wrapper>
            <MovieBrowser>
                <Video />
                <Title>
                    Movies Browser
                </Title>
            </MovieBrowser>
            <Navi>
                <NaviLi>
                    <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                </NaviLi>
                <NaviLi>
                    <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                </NaviLi>
            </Navi>

            <Input
                placeholder="Search for movies..."
            >
            </Input>
        </Wrapper >
        <Switch>
            <Route path="/movies">
                <MoviesListPage />
            </Route>
            <Route path="/people">
                <PeopleListPage />
            </Route>
            <Route path="/">
                <MoviesListPage />
            </Route>
        </Switch>
    </HashRouter>
);

export default Header;