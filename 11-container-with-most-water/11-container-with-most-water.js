var maxArea = function (height) {
  let max = 0;
  let point1 = 0;
  let point2 = height.length - 1;

  while (point2 > point1) {
    let area = Math.min(height[point1], height[point2]) * (point2 - point1);
    if (area > max) max = area;
    height[point1] > height[point2] ? point2-- : point1++;
  }

  return max;
};
