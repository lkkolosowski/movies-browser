import { PersonImage } from "../Images";
import { Name, Person, Role } from "./styled";

export const PersonTile = ({ name, role, poster, id }) => (
  <Person>
    <PersonImage poster={poster} id={id}/>
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Person>
);
