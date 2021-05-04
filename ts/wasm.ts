// @ts-ignore
import loader from "https://cdn.jsdelivr.net/npm/@assemblyscript/loader/index.js";

// @ts-ignore
const {exports} = await loader.instantiate(fetch('./wasm/optimized.wasm'));

export const fibSimple = exports.fibSimple as (n: number) => number;
