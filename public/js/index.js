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
document.getElementById("fibonacci")?.addEventListener('click', (e) => {
    const dom = e.target;
    const trDom = dom.parentElement.parentElement;
    const numberDom = dom.parentNode?.querySelector('input[type=number]');
    const n = Number.parseInt(numberDom.value, 10);
    measureTime(trDom, () => executer.fibSimple(n), () => wasnExecuter.fibSimple(n));
});
//# sourceMappingURL=index.js.map