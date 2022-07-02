/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let count = Array(n).fill(0);

  roads.forEach((element) => {
    count[element[0]]++;
    count[element[1]]++;
  });

  let max = findMaxRoads(count);
  let second = {};

  if (max.roads.length === 1) {
    count = count.map((element) => {
      return element === max.count ? -1 : element;
    });
    second = findMaxRoads(count);
  } else {
    second = max;
  }

  let answer = max.count + second.count;
  return checkNotConnectRoads(roads, max.roads, second.roads)
    ? answer
    : answer - 1;
};

const findMaxRoads = (count) => {
  let maxRoads = [];
  let maxCount = Math.max(...count);

  for (let i = 0; i < count.length; i++) {
    if (count[i] === maxCount) {
      maxRoads.push(i);
    }
  }
  return { count: maxCount, roads: maxRoads };
};

const checkNotConnectRoads = (roads, max, second) => {
  let check = false;
  roads = roads.map((element) => (element = element[0] + " " + element[1]));

  for (let i = 0; i < max.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (max[i] === second[j]) continue;
      if (
        !roads.includes(max[i] + " " + second[j]) &&
        !roads.includes(second[j] + " " + max[i])
      ) {
        check = true;
      }
    }
  }
    
  return check;
};
