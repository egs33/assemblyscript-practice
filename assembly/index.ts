export const add = (a: i32, b: i32): i32 => a + b;

export const fibSimple = (n: i32): i32 => {
  if (n <= 1) {
    return 1;
  }
  return fibSimple(n - 1) + fibSimple(n - 2);
};
