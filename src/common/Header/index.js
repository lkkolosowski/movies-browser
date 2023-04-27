import { Wrapper, MovieBrowser, Title, Navi, NaviLi, Input, StyledNavLink } from "./styled";
import { ReactComponent as Video } from '../../ImagesSVG/Video.svg';
import { HashRouter, Route, Switch } from "react-router-dom";
import MoviesList from "../../features/MoviesList";
import PeopleList from "../../features/PeopleList";


const Header = () => (
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
                <MoviesList />
            </Route>
            <Route path="/people">
                <PeopleList />
            </Route>
            <Route path="/">
                <MoviesList />
            </Route>
        </Switch>
    </HashRouter>
);

export default Header;