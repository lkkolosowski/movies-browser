export const toMovies = () => "/movies";
export const toPeople = () => "/people";
export const toMovie = ({ id } = { id: ":id" }) => `/movies/${id}`;
