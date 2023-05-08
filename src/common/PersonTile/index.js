import { toPeople } from "../../routes";
import { PersonImage } from "../Images";
import { Name, Person, Role, StyledLink } from "./styled";

export const PersonTile = ({ name, role, poster, id }) => (
  <StyledLink to={toPeople()}>
    {" "}
    {/* this link will lead to a person (toPerson) in the future */}
    <Person>
      <PersonImage poster={poster} id={id} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Person>
  </StyledLink>
);
