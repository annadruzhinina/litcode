// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  left = 0; //0
  right = nums.length - 1; //3

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); //1

    if (nums[mid] === target) return mid; //3===5 false
    if (nums[mid] < target) left = mid + 1; // 3<5
    else right = mid - 1;
  }
  return left;
};

nums = [1, 3, 7, 8];
target = 5;
console.log(searchInsert(nums, target));

nums = [1, 3, 5, 6];
target = 2;
console.log(searchInsert(nums, target));

nums = [1, 3, 5, 6];
target = 7;
console.log(searchInsert(nums, target));
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
