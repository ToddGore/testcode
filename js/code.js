let string = "Hello"

// Reverse string
function reverse(str) {
    let reversed = ""
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}
console.log('reverse ', reverse(string));

// for each, for of, for each


