import { toPerson } from "../../routes";
import { PersonImage } from "../Images";
import { Name, Person, Role, StyledLink } from "./styled";

export const PersonTile = ({ name, role, poster, id }) => (
  <StyledLink to={toPerson({ id: id })}>
    <Person>
      <PersonImage poster={poster} id={id} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Person>
  </StyledLink>
);
