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
