function pipe() {
    let val = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        val = arguments[i](val);
    }
    return val;
}
function addOne(x) {
    return x + 1;
}
pipe(1, addOne, addOne);