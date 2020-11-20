export const modifyRateValues = (rates) => {
  return Object.keys(rates).reduce((acc, curr) => {
    acc[curr] = {
      origin: curr,
      rate: Number(rates[curr].toFixed(4)),
      isFavorite: false
    };

    return acc;
  }, {});
};
