function reverseNumber(num) {
    let plus = Math.abs(num);
    var result = '';
    let minus = '-';

    var digits = plus + '';
    for (var i = 0, length = digits.length; i < length; i++) {
        result = result + (plus % 10);
        plus = parseInt(plus / 10);
    }
    if (num < 0) {
        result = minus + result;
    }
    if (result) {
        result = +result;
    }

    return result;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));