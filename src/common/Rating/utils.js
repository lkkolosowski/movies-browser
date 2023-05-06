export const toDecimal = (string) => {
  return string.toFixed(1).split(".").join(",");
};
