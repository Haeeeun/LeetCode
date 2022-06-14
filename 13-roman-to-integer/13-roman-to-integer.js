/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const symbols = [
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ];
  const stringArray = Array.from(s);
  let answer = 0;
  let beforeValue = 0;

  while (stringArray.length !== 0) {
    const symbol = stringArray.pop();

    for (let i = 0; i < symbols.length; i++) {
      if (symbol === symbols[i][0]) {
        symbols[i][1] >= beforeValue
          ? (answer += symbols[i][1])
          : (answer -= symbols[i][1]);
        beforeValue = symbols[i][1];
        break;
      }
    }
  }

  return answer;
};
