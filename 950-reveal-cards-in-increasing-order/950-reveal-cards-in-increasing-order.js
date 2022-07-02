/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  let answer = [];

  while (deck.length !== 0) {
    let max = Math.max(...deck);

    let maxRemovedArr = deck.filter((element) => element !== max);
    deck = maxRemovedArr;

    if (answer.length > 0) {
      let bottom = answer.pop();
      answer.unshift(bottom);
    }

    answer.unshift(max);
  }

  return answer;
};