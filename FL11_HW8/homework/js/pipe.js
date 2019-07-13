function addOne(x) {
    return x + 1;
}

function pipe() {
    let result = arguments[1](arguments[0]);
    for (let i = 2; i < arguments.length; i++) {
        result += arguments[0];
    }
    return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));