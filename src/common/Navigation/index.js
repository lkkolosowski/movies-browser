import { Wrapper, MovieBrowser, Title, Navi, NaviLi, Input} from "./styled";
import { ReactComponent as Video } from '../../ImagesSVG/Video.svg';
import { ReactComponent as Ellipse } from '../../ImagesSVG/Ellipse.svg';

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
        
            <Input
                placeholder="Search for movies..."
            >
            </Input>
        
    </Wrapper >
);