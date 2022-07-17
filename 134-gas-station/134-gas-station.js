var canCompleteCircuit = function (gas, cost) {
  let curr = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    curr += gas[i] - cost[i];
    if (curr < 0) {
      curr = 0;
      start = i + 1;
    }
  }

    return tank >= 0 ? start : -1;
};