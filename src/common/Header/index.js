import { Wrapper, WrapperBox, MovieBrowser, WrapperBoxLine, Title, Navi, NaviLi, NaviInput, Input, StyledNavLink, VideoSvg, SearchSvg } from "./styled";
import { HashRouter, Route, Switch } from "react-router-dom";
import MoviesList from "../../features/MoviesList";
import PeopleList from "../../features/PeopleList";


const Header = () => (
    <HashRouter>
        <Wrapper>
            <WrapperBox>
                <WrapperBoxLine>
                    <MovieBrowser>
                        <VideoSvg />
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
                </WrapperBoxLine>
                <NaviInput>
                    <SearchSvg />
                    <Input
                        placeholder="Search for movies..."
                    >
                    </Input>
                </NaviInput>
            </WrapperBox>
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