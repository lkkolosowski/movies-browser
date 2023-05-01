import { BackdropRating } from "../../../common/Tiles/Rating";
import {
  BackdropBody,
  BackdropContent,
  BackdropWrapper,
  Overlay,
  Wrapper,
  Title,
} from "./styled";

const Backdrop = ({ background, title, vote, votes }) => (
  <BackdropWrapper>
    <Wrapper>
      <BackdropBody background={background}>
        <Overlay>
          <BackdropContent>
            <Title>{title}</Title>
            {votes && (
              <BackdropRating
                vote={vote}
                votes={votes}
              />
            )}
          </BackdropContent>
        </Overlay>
      </BackdropBody>
    </Wrapper>
  </BackdropWrapper>
);

export default Backdrop;
