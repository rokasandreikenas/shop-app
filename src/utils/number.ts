export const arraySum = (array: number[]) => {
  return array.reduce((prev, curr) => (prev += curr), 0);
};
