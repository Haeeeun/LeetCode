var canJump = function (nums) {
  let visit = new Array(nums.length).fill("F");
  visit[0] = "T";

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + nums[i]; j++) {
      if (visit[i] === "T") visit[j] = "T";
    }
    if (visit[nums.length - 1] === "T") break;
  }
    
  return visit[nums.length - 1] === "T";
};