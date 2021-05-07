import * as executer from './executer.js';
import * as wasnExecuter from './wasm.js';
const measureTime = (trDom, jsExec, wasmExec) => {
    const numberFormatter = new Intl.NumberFormat();
    const startJs = performance.now();
    const resultJS = jsExec();
    const endJs = performance.now();
    const startWasm = performance.now();
    const resultWasm = wasmExec();
    const endWasm = performance.now();
    const jsDom = trDom?.querySelector('td:nth-child(2)');
    if (jsDom) {
        const duration = numberFormatter.format(endJs - startJs);
        jsDom.textContent = `${duration}ms (${resultJS})`;
    }
    const wasmDom = trDom?.querySelector('td:nth-child(3)');
    if (wasmDom) {
        const duration = numberFormatter.format(endWasm - startWasm);
        wasmDom.textContent = `${duration}ms (${resultWasm})`;
    }
};
document.getElementById('fibonacci')?.addEventListener('click', (e) => {
    const dom = e.target;
    const trDom = dom.parentElement?.parentElement;
    const numberDom = dom.parentNode?.querySelector('input[type=number]');
    if (!trDom || !numberDom) {
        return;
    }
    const n = Number.parseInt(numberDom.value, 10);
    measureTime(trDom, () => executer.fibSimple(n), () => wasnExecuter.fibSimple(n));
});
document.getElementById('tarai')?.addEventListener('click', (e) => {
    const dom = e.target;
    const trDom = dom.parentElement?.parentElement;
    const numberDoms = dom.parentNode?.querySelectorAll('input[type=number]');
    if (!trDom || !numberDoms || numberDoms.length < 3) {
        return;
    }
    const x = Number.parseInt(numberDoms[0].value, 10);
    const y = Number.parseInt(numberDoms[1].value, 10);
    const z = Number.parseInt(numberDoms[2].value, 10);
    measureTime(trDom, () => executer.tarai(x, y, z), () => wasnExecuter.tarai(x, y, z));
});
document.getElementById('prime')?.addEventListener('click', (e) => {
    const dom = e.target;
    const trDom = dom.parentElement?.parentElement;
    const numberDom = dom.parentNode?.querySelector('input[type=number]');
    if (!trDom || !numberDom) {
        return;
    }
    const n = Number.parseInt(numberDom.value, 10);
    measureTime(trDom, () => executer.primeNumbers(n).length, () => wasnExecuter.primeNumbers(n).length);
});
document.getElementById('eratosthenes')?.addEventListener('click', (e) => {
    const dom = e.target;
    const trDom = dom.parentElement?.parentElement;
    const numberDom = dom.parentNode?.querySelector('input[type=number]');
    if (!trDom || !numberDom) {
        return;
    }
    const n = Number.parseInt(numberDom.value, 10);
    measureTime(trDom, () => executer.sieveOfEratosthenes(n), () => wasnExecuter.sieveOfEratosthenes(n));
});
//# sourceMappingURL=index.js.map