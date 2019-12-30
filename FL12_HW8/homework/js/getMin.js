function getMin() {
    let mNum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (mNum > arguments[i]) {
            mNum = arguments[i];
        }
    }
    return mNum;
}
getMin(3, 0, -3);