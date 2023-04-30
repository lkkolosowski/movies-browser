export const convertToDecimal = (string) => {
  return string.toFixed(1).split(".").join(",");
};
