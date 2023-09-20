export const add = (numbers: number[]): string => {
  return numbers
    .reduce((prev, cur) => {
      const result = prev + cur;
      if (Number.isNaN(result)) {
        return 0;
      }
      return result;
    })
    .toString();
};

export const subtract = (numbers: number[]): string => {
  return numbers
    .reduce((prev, cur) => {
      const result = prev - cur;
      if (Number.isNaN(result)) {
        return prev;
      }
      return result;
    })
    .toString();
};

export const multiply = (numbers: number[]): string => {
  return numbers
    .reduce((prev, cur) => {
      const result = prev * cur;
      if (Number.isNaN(result)) {
        return prev;
      }
      return result;
    })
    .toString();
};

export const divide = (numbers: number[]): string => {
  // TODO: Display division by zero error
  return numbers
    .reduce((prev, cur) => {
      const result = prev / cur;
      if (Number.isNaN(result)) {
        return prev;
      }
      return result;
    })
    .toString();
};
