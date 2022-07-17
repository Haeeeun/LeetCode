var canJump = function (nums) {
  let visit = new Array(nums.length).fill(false);
  visit[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + nums[i]; j++) {
      if (visit[i]) {visit[j] = true;} else break;
    }
    if (visit[nums.length - 1]) break;
  }

  return visit[nums.length - 1]
};