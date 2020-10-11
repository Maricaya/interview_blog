// 112. path sum
function hasPathSum(root, sum) {
    if (root === null) {
        return false;
    }
    // 递归终止条件
    // 从根到叶子节点
    if (root.left === null && root.right === null) {
        return root.val === sum;
    }
    return hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
}
// 404. sum of left leaves