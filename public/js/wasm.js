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
export const fibSimple = exports.fibSimple;
export const tarai = exports.tarai;
export const primeNumbers = (n) => {
    const ptr = exports.primeNumbers(n);
    // eslint-disable-next-line no-underscore-dangle
    return exports.__getArray(ptr);
};
export const sieveOfEratosthenes = exports.sieveOfEratosthenes;
//# sourceMappingURL=wasm.js.map