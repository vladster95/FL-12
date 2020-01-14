const n1 = 1;
const n2 = 2;
const n3 = 3;
const n5 = 5;
const n7 = 7;
const n8 = 8;
const n14 = 14;
const n29 = 29;
const n30 = 30;
const n31 = 31;
const n48 = 48;
const n58 = 58;
const n365 = 365;
const n2019 = 2019;
const s1 = '1';
const s4 = '4';
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
const date = new Date(n2019, 0, n2);
function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arr.push(parseInt(arguments[i]));
        } else {
            arr.push("'" + arguments[i] + "'");
        }
    }
    return arr;
}
function executeforEach(arr, f) {
    let arr2 = [];
    arr.forEach(o => {
        arr2.push(f(o));
    });
    return arr2;
}
function mapArray(arr, f) {
    return executeforEach(arr, f);
}
function filterArray(arr, f) {
    let arr2 = [];
    let arrR = executeforEach(arr, f)
    executeforEach(arr, f)
    for (let o in arrR) {
        if (arrR[o]) {
            arr2.push(arr[o]);
        }
    }
    return arr2;
}
function flipOver(str) {
    let str2 = '';
    for (let i = str.length; i > 0; i--) {
        str2 += str[i - 1];
    }
    return str2;
}
function makeListFromRange(arr) {
    let arr2 = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        arr2.push(i);
    }
    return arr2;
}
function getArrayOfKeys(arr, p) {
    return executeforEach(arr, function (el) {
        return el[p]
    });
}
function substitute(arr, f) {
    return executeforEach(arr, f);
}
function getPastDay(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
function formatDate(d) {
    return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
}
convert(s1, n2, n3, s4);
executeforEach([n1, n2, n3], function (el) {
    console.log(el * n2)
});
mapArray([n2, n5, n8], function (el) {
    return el + n3
});
filterArray([n2, n5, n8], function (el) {
    return el % n2 === 0
});
flipOver('hey world');
makeListFromRange([n2, n7]);
getArrayOfKeys(actors, 'name');
substitute([n58, n14, n48, n2, n31, n29], function (el) {
    return el < n30 ? '*' : el
});
getPastDay(date, n1);
getPastDay(date, n2);
getPastDay(date, n365);
formatDate(new Date('6/15/2018 09:15:00'));