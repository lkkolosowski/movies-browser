export const extractFirstWord = (string) => {
  return string.split("-")[0];
};

export const separateNamesByCommas = (array) => {
  return array.map(({ name }) => name).join(", ");
};

export const reverseString = (string) => {
  return string.split("-").reverse().join(".");
};
