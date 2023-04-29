export const getGenresNames = ({ ids, id }) => {
  return ids.map((ids) => id.filter(({ id }) => id === ids)[0].name);
};
