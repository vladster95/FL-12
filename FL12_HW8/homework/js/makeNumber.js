function makeNumber(expr) {
    let num = '';
    for (let i = 0; i < expr.length; i++) {
        if (!isNaN(parseInt(expr[i]))) {
            num += expr[i];
        }
    }
    return num;
}
makeNumber('erer384jjjfd123');