let string = "Hello"


function reverseString(str) {
    let tempStr = ""
    console.log('length ', str.length);

    for (i = str.length - 1; i >= 0; i--) {
        // What does i represent? An array of Characters!
        // i starts at 0.
        tempStr += str[i]
    }
    return tempStr
}

console.log(reverseString(string))



function reverse2(str) {
    let reversed = ""
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}
console.log('reverse2 ', reverse2(string));


