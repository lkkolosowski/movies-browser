import { PersonImage } from "../Images";
import { FullName, Person, Role } from "./styled";

export const PersonTile = () => (
  <Person>
    <PersonImage />
    <FullName>Liu Yifei</FullName>
    <Role>Mulan</Role>
  </Person>
);
