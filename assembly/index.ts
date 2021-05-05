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
