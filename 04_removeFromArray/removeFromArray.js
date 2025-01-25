const removeFromArray = function(numSet, ...args) {
    let newSet = [];
    for (let i = 0; i < numSet.length; i++) {
        if (args.includes(numSet[i])) {
            continue;
        } else {
            newSet.push(numSet[i]);
        }
    };
    return newSet;
};

// Test 1 - 8
console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 2, 3], 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
