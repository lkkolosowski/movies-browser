import { Title, Subtitle } from "./styled";
import { extractFirstWord } from "./utils";

export const MainInfo = ({ title, year }) => (
  <div>
    <Title>{title}</Title>
    <Subtitle>{extractFirstWord(year)}</Subtitle>
  </div>
);
