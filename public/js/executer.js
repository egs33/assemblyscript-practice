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
//# sourceMappingURL=executer.js.map