import {
  Title,
  Subtitle,
  Wrapper,
  Paragraph,
  Attribute,
  Value,
  TitleDetails,
  SubtitleDetails,
} from "./styled";
import {
  extractFirstWord,
  separateNamesByCommas,
  reverseString,
} from "./utils";

export const MainInfo = ({ title, year }) => (
  <div>
    <Title>{title}</Title>
    {year && <Subtitle>{extractFirstWord(year)}</Subtitle>}
  </div>
);

export const AdditionalInfo = ({ production, release }) => (
  <Wrapper>
    {production.length !== 0 && (
      <Paragraph>
        <Attribute mobile>Production:</Attribute>
        <Value>{separateNamesByCommas(production)}</Value>
      </Paragraph>
    )}
    {release && (
      <Paragraph>
        <Attribute mobile>Release date:</Attribute>
        <Value>{reverseString(release)}</Value>
      </Paragraph>
    )}
  </Wrapper>
);

export const MainInfoDetails = ({ title, year }) => (
  <>
    <TitleDetails>{title}</TitleDetails>
    {year && <SubtitleDetails>{extractFirstWord(year)}</SubtitleDetails>}
  </>
);
