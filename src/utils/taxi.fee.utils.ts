export const getTaxiFee = (distance: number) => {
  if (!distance) {
    return 0;
  }

  const feeByMiter = 1.3;

  return distance * feeByMiter;
};
