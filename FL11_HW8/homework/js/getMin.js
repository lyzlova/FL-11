let i;
let number = 1;

function getMin() {
    let min = arguments[0];
    for (i = 0; i < arguments.length; i += number) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(getMin(3, 0, -3));