const a1 = prompt('Input point’s numeric values a1');
const a2 = prompt('Input point’s numeric values a2');
const b1 = prompt('Input point’s numeric values b1');
const b2 = prompt('Input point’s numeric values b2');
const c1 = prompt('Input point’s numeric values c1');
const c2 = prompt('Input point’s numeric values c2');
const number = 2;

if ((a1 + b1) / number === c1 && (a2 + b2) / number === c2) {
    console.log(true);
} else {
    console.log(false);
}