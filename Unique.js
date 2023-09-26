function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

// Example
let nums = [0, 0, 1, 1, 2, 2, 3, 3];
let k = removeDuplicates(nums);
console.log("k: ", k); // 4
console.log(nums.slice(0, k)); // [0, 1, 2, 3]
