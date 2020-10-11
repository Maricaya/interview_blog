// 二分搜索树中的问题
/**
 * 二分搜索树：
 * 每个节点的键值大于左孩子，
 * 每个节点的键值小于右孩子，
 * 以左右孩子为根的子树仍为二分搜索树
 */
// 插入 insert
// 查找 find
// 删除 delete

// 235. lowest common ancestor of a binary search tree
// p q node 比较
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null;
    }
    if (p.val < root.val && q.val < root.val) {
        // 都在左子树
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        // 都在右子树
        return lowestCommonAncestor(root.right, p, q)
    }
    // p q 必须在 root 上
    return root;
};

// 98. validate binary search
// 450. delete node in a bst
// 108. convert storted array to binary search tree
// 230. kth smallest element in a BST
// 236. lowest common ancestor of a binary tree 