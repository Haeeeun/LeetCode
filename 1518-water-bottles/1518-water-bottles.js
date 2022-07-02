/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let answer = numBottles;

  while (numBottles >= numExchange) {
    answer += Math.floor(numBottles / numExchange);
    numBottles =
      Math.floor(numBottles / numExchange) + (numBottles % numExchange);
  }

  return answer;
};