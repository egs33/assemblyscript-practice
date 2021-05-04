export function fibSimple(n) {
    if (n <= 1) {
        return 1;
    }
    return fibSimple(n - 1) + fibSimple(n - 2);
}
//# sourceMappingURL=executer.js.map