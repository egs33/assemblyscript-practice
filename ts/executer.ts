export const fibSimple = (n: number): number => {
  if (n <= 1) {
    return 1;
  }
  return fibSimple(n - 1) + fibSimple(n - 2);
};

// eslint-disable-next-line func-style
export const tarai = (x: number, y: number, z: number): number => {
  if (x <= y) {
    return y;
  }
  return tarai(
    tarai(x - 1, y, z),
    tarai(y - 1, z, x),
    tarai(z - 1, x, y),
  );
};
