export const add = (a: i32, b: i32): i32 => a + b;

// eslint-disable-next-line func-style
export function fibSimple(n: i32): i32 {
  if (n <= 1) {
    return 1;
  }
  return fibSimple(n - 1) + fibSimple(n - 2);
}

// eslint-disable-next-line func-style
export function tarai(x: i32, y: i32, z: i32): i32 {
  if (x <= y) {
    return y;
  }
  return tarai(
    tarai(x - 1, y, z),
    tarai(y - 1, z, x),
    tarai(z - 1, x, y),
  );
}

/**
 * Gets prime numbers under or equal n.
 * trial division algorithm
 * @param n threshold (>=2)
 */
// eslint-disable-next-line func-style
export function primeNumbers(n: i32): i32[] {
  const primeNums = [2];
  for (let i = 3; i <= n; i++) {
    const sqrt = Math.sqrt(i);
    for (let j = 0; j < primeNums.length; j++) {
      const p = unchecked(primeNums[j]);
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
}

/**
 * Counts prime numbers under or equal n.
 * trial division algorithm
 * @param n threshold (>=2)
 */
// eslint-disable-next-line func-style
export function sieveOfEratosthenes(n: i32): i32 {
  const numbers = new Int32Array(n + 1);
  numbers[0] = 1;
  numbers[1] = 1;
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    for (let j = 2; i * j <= n; j++) {
      unchecked(numbers[i * j] = 1);
    }
  }
  return numbers.reduce((prev, num) => (num === 0 ? prev + 1 : prev), 0);
}
