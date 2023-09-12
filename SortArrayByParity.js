// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.
// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]
function sortArrayByParity(nums) {
  let start = 0;
  let end = nums.length - 1;

  console.log(
    "start:",
    nums[start],
    "indexStart: ",
    start,
    "end: ",
    nums[end],
    "index-end: ",
    end,
    nums
  );
  while (start < end) {
    if (nums[start] % 2 === 0) start++;
    else if (nums[end] % 2 === 1) end--;
    else {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }

    console.log(
      "start:",
      nums[start],
      "indexStart: ",
      start,
      "end: ",
      nums[end],
      "index-end: ",
      end,
      nums
    );
  }
  return nums;
}

console.log(sortArrayByParity([4, 1, 2, 3]));
