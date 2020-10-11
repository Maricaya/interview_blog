// 437. path sum |||
// 在以 root 为根节点的二叉树中
// 寻找和为 sum 的路径， 返回这样的路径个数
var pathSum = function(root, sum) {
    if(root === null) {
        return 0
    }
    let res = findPath(root, sum)
    res += pathSum(root.left, sum)
    res += pathSum(root.right, sum)
    return res
};

// 在以 node 为根节点的二叉树中
// 寻找包含node的路径，和为 num
// 返回这样的路径个数
function findPath(node, num) {
    if (node === null) {
        return 0;
    }
    let res = 0;
    if (node.val === num) {
        res += 1
    }
    res += findPath(node.left, num - node.val)
    res += findPath(node.right, num - node.val)
    return res;
}
