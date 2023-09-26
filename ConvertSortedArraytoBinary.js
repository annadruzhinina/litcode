function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  let midIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[midIdx]);

  root.left = sortedArrayToBST(nums.slice(0, midIdx));
  root.right = sortedArrayToBST(nums.slice(midIdx + 1));

  return root;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
