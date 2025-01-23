const reverseString = function(word) {
    let reversed = "";
    for (let i = word.length; i>0; i--) {
        let letter = word.slice(i-1,i);
        reversed += letter;
    }
    return reversed;
};

// Test 1-4
console.log(reverseString('hello'));
console.log(reverseString('hello there'));
console.log(reverseString('123! abc! Hello, Odinite.'));
console.log(reverseString(''));

// Do not edit below this line
module.exports = reverseString;
