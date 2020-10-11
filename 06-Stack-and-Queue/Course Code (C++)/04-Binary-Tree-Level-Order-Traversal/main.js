// 队列 queue
// 队列的基本应用 - 广度优先遍历
// 树 - 层序遍历，图 - 无权图的最短路径
// 102. binary tree level order traversal
function levelOrder(root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const queue = [];
    queue.push([root, 0])
    while(queue.length > 0) {
        let [currentNode, level] = queue.shift();
        if (res[level] === undefined) {
            res[level] = []
        }
        res[level].push(currentNode.val)
        currentNode.left
        &&  queue.push([currentNode.left, level + 1]);
        
        currentNode.right
        &&  queue.push([currentNode.right, level + 1]);
        
    }
    return res;
}
// 107. binary tree level order traversal ||
// 103. binary tree zigzag level order traversal
// 199. binary tree right side view