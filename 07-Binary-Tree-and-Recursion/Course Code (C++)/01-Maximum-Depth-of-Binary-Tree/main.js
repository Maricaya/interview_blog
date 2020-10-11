// 二叉树和递归
// 二叉树有天然的递归结构
// 104. maximum depth of binary tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    const leftMaxDepth = maxDepth(root.left)
    const rightMaxDepth = maxDepth(root.right)
    return Math.max(leftMaxDepth, rightMaxDepth) +1
 };