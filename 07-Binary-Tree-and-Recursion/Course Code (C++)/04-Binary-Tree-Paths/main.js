// 257. binary tree paths
var binaryTreePaths = function(root) {
    const res = [];
    if (root === null) {
        return res;
    }
    if (root.left === null && root.right === null) {
        res.push(root.val + '')
        return res;
    }
    const left = binaryTreePaths(root.left);
    for(let i=0;i<left.length;i++) {
        res.push(root.val + '->' + left[i])
    }
    const right = binaryTreePaths(root.right);
    for(let i=0;i<right.length;i++) {
        res.push(root.val + '->' + right[i])
    }
    return res;
};
// 113. path sum ||
// 129. sum root to leaf numbers