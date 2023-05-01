export const getNames = (ids, id) => {
  return ids.map((ids) => id.filter(({ id }) => id === ids)[0].name);
};

export const extractNames = (ids) => {
  return ids.map((id) => id.name);
};
