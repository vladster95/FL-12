function countNumbers(expr) {
    let rng = {};
    for (let i = 0; i < expr.length; i++) {
        if (!isNaN(parseInt(expr[i]))) {
            if (typeof rng[expr[i]] === 'undefined') {
                rng[expr[i]] = 1;
            } else {
                rng[expr[i]]++;
            }
        }
    }
    return Object.values(rng);
}
countNumbers('erer384jj4444666888jfd123');