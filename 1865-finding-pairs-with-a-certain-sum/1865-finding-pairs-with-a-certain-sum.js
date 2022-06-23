/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.map2 = new Map();

  this.nums1 = nums1;
  this.nums2 = nums2;

  for (const num of nums2) {
    if (!this.map2.has(num)) this.map2.set(num, 0);
    this.map2.set(num, this.map2.get(num) + 1);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  const prevVal = this.nums2[index];

  this.map2.set(prevVal, this.map2.get(prevVal) - 1);
  if (this.map2.get(prevVal) === 0) this.map2.delete(prevVal);

  const newVal = prevVal + val;
  this.nums2[index] = newVal;

  if (!this.map2.has(newVal)) this.map2.set(newVal, 0);
  this.map2.set(newVal, this.map2.get(newVal) + 1);

  return;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let count = 0;

  for (let i = 0; i < this.nums1.length; ++i) {
    const num1 = this.nums1[i];

    if (num1 >= tot) continue;

    const diff = tot - num1;

    if (!this.map2.has(diff)) continue;

    count += this.map2.get(diff);
  }

  return count;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */