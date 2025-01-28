const convertToCelsius = function(tempF) {
  // x °F ≘ (x − 32) × ⁠5/9⁠ °C 
  // Condensed version
  // return final = Number(((tempF - 32) * 5/9).toFixed(1))
  let convert = (tempF - 32) * 5/9;
  let oneDecimal = convert.toFixed(1);
  let stringToNum = Number(oneDecimal);
  return stringToNum;
};

const convertToFahrenheit = function(tempC) {
  // x °C ≘ (x × ⁠9/5⁠ + 32) °F 
  let convert = tempC * 9/5 + 32;
  let oneDecimal = convert.toFixed(1);
  let stringToNum = Number(oneDecimal);
  return stringToNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
