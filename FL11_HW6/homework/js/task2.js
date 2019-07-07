const a = prompt('Input first length triangle sides');
const b = prompt('Input second length triangle sides');
const c = prompt('Input third length triangle sides');

if (b + c - a > 0 && a + c - b > 0 && a + b - c > 0) {
    if (a === b && b === c && c === a) {
        console.log('Eequivalent triangle');
    } else if (a !== b && b !== c && c !== a) {
        console.log('Normal triangle');
    } else {
        console.log('Isosceles trianglet');
    }
} else {
    console.log('Triangle doesn’t exist');
}