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

/**
 * Gets prime numbers under or equal n.
 * trial division algorithm
 * @param n threshold (>=2)
 */
export const primeNumbers = (n: number): number[] => {
  const primeNums: number[] = [2];
  for (let i = 3; i <= n; i++) {
    const sqrt = Math.sqrt(i);
    for (const p of primeNums) {
      if (p > sqrt) {
        primeNums.push(i);
        break;
      }
      if (i % p === 0) {
        break;
      }
    }
  }
  return primeNums;
};
