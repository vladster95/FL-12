let expr = prompt('Quadratic equation', ' ');
let str = expr.split(',');
let a = Number(str[0]);
let b = Number(str[1]);
let c = Number(str[1+1]);
let d = b*b - (a+a+a+a) * c;
let x1 = 0, x2 = 0;
console.log('a= ' + a);
console.log('b= ' + b);
console.log('c= ' + c);
console.log('d= ' + d);
if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (a + a);
    x2 = (-b - Math.sqrt(d)) / (a + a);
    console.log('value x1 = ' + x1);
    console.log('value x2 = ' + x2);
} else if (d < 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else if (d === 0) {
    x1 = -b / (a + a);
    console.log('value x1=' + x1);
} else if (isFinite(d) || d !== null || str.length>0) {
    console.log('No solution');
}