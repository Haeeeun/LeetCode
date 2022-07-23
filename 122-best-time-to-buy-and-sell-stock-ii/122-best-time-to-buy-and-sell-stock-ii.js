/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let answer = 0;
  let buy = prices.shift();

  prices.forEach((price) => {
    price > buy ? ((answer += price - buy), (buy = price)) : (buy = price);
  });

  return answer;
};