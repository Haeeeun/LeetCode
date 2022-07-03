var maximalNetworkRank = function (n, roads) {
  const graph = [];

  for (let i = 0; i < n; i++) {
    graph.push(Array(n).fill(0));
  }

  for (const [from, to] of roads) {
    graph[from][to] = 1;
    graph[to][from] = 1;
  }

  const ranks = [];

  for (let i = 0; i < n; i++) {
    ranks[i] = graph[i].filter((x) => x > 0).length;
  }

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const res = ranks[i] + ranks[j] + (graph[i][j] > 0 ? -1 : 0);
      max = Math.max(max, res);
    }
  }

  return max;
};