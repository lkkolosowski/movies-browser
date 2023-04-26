import { Wrapper, MovieBrowser, Title, Navi, NaviLi } from "./styled";
import { ReactComponent as Video } from '../../ImagesSVG/Video.svg';

export const Navigation = () => (
    <Wrapper>
        <MovieBrowser>
            <Video />
            <Title>
                Movies Browser
            </Title>
        </MovieBrowser>
        <Navi>
        <NaviLi>
            MOVIES
        </NaviLi>
        <NaviLi>
            PEOPLE
        </NaviLi>
        </Navi>
    </Wrapper>
);