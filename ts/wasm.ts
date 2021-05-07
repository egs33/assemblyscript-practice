/* eslint-disable
   @typescript-eslint/ban-ts-comment,
   @typescript-eslint/no-unsafe-member-access,
   @typescript-eslint/no-unsafe-assignment,
   @typescript-eslint/no-unsafe-call,
   import/extensions */
// @ts-ignore
import loader from 'https://cdn.jsdelivr.net/npm/@assemblyscript/loader/index.js';

// @ts-ignore
const { exports } = await loader.instantiate(fetch('./wasm/optimized.wasm'));

export const fibSimple = exports.fibSimple as (n: number) => number;
export const tarai = exports.tarai as (x: number, y: number, z: number) => number;
export const primeNumbers = (n: number): number[] => {
  const ptr = exports.primeNumbers(n) as number;
  // eslint-disable-next-line no-underscore-dangle
  return exports.__getArray(ptr) as number[];
};
export const sieveOfEratosthenes = exports.sieveOfEratosthenes as (n: number) => number;
