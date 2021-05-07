export const fibSimple = (n) => {
    if (n <= 1) {
        return 1;
    }
    return fibSimple(n - 1) + fibSimple(n - 2);
};
// eslint-disable-next-line func-style
export const tarai = (x, y, z) => {
    if (x <= y) {
        return y;
    }
    return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
};
/**
 * Gets prime numbers under or equal n.
 * trial division algorithm
 * @param n threshold (>=2)
 */
export const primeNumbers = (n) => {
    const primeNums = [2];
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
export const sieveOfEratosthenes = (n) => {
    const numbers = new Array(n + 1);
    numbers.fill(0);
    numbers[0] = 1;
    numbers[1] = 1;
    const max = Math.sqrt(n);
    for (let i = 2; i <= max; i++) {
        for (let j = 2; i * j <= n; j++) {
            numbers[i * j] = 1;
        }
    }
    return numbers.reduce((prev, num) => (num === 0 ? prev + 1 : prev), 0);
};
//# sourceMappingURL=executer.js.map