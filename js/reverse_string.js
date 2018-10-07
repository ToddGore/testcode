function reverse(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}



function reverse(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}



function reverse(str) {
    return str.split("").reverse().join("");
}


function reverse(str) {
    return [...str].reverse().join('');
}


function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, '');
}

// Recursion
function reverse(str) {
    if (str === "") {
        return str
    } else {
        return reverse(str.substr(1)) + str[0]
    }
}

function reverse(str) {
    if (str === "")
        return "";
    else
        return reverse(str.substr(1)) + str.charAt(0);
}





// One way to refactor our recursion would be to use ternary operator:
function reverse(str) {
    return str ? reverse(str.substr(1)) + str[0] : str
}