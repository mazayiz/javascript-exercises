const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        let lowNum = 0;
        let highNum = 0;
        if (num1 > num2) {
            lowNum = num2;
            highNum = num1;
        } else {
            lowNum = num1;
            highNum = num2;
        }
        let final = 0
        for (let i = lowNum; i <= highNum; i++){
            final += i;
        };
        return final;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
