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

export const MainInfo = ({ title, year, character }) => (
  <div>
    <Title>{title}</Title>
    {year && (
      <Subtitle>
        {character} ({extractFirstWord(year)})
      </Subtitle>
    )}
  </div>
);

export const AdditionalInfo = ({ production, release }) => (
  <Wrapper>
    {production && (
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

export const PersonInfo = ({ dateOfBirth, placeOfBirth }) => (
  <Wrapper>
    {dateOfBirth && (
      <Paragraph>
        <Attribute mobile>Date of birth:</Attribute>
        <Value>{reverseString(dateOfBirth)}</Value>
      </Paragraph>
    )}
    {placeOfBirth && (
      <Paragraph>
        <Attribute mobile>Place of birth:</Attribute>
        <Value>{placeOfBirth}</Value>
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