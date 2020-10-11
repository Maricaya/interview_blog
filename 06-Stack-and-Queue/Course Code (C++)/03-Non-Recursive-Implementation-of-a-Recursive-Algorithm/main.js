// 栈和递归的紧密联系
// 144.binary tree preorder trvaersal
// 94.binary tree inorder trvaersal
// 145.binary tree postorder trvaersal

// 前序遍历二叉树非递归算法
function preorderTraversal(node) {
    let res = [];
    if (root === null) {
        return res;
    }
    let stack = [root];
    while (stack.length > 0) {
        let current = stack.pop();
        current.right && stack.push(current.right)
        current.left && stack.push(current.left)
        res.push(current.val);
    }
    return res;
}

function Stack(action, node) {
    this.action = action
    this.node = node
}
var inorderTraversal = function(root) {
    let res = [];
    if (root === null) {
        return res;
    }
    let stack = []
    stack.push(new Stack('go', root));
    while (stack.length > 0) {
        let current = stack.pop();
        if (current.action === 'print') {
            res.push(current.node)
        }
        else {
            current.node.right && stack.push(new Stack('go', current.node.right))
            stack.push(new Stack('print', current.node.val))
            current.node.left && stack.push(new Stack('go', current.node.left))
        }
    }
    return res;
};

function postorderTraversal(node) {
    let res = [];
    if (root === null) {
        return res;
    }
    let stack = [root];
    while (stack.length > 0) {
        let current = stack.pop();
        current.right && stack.push(current.right)
        res.push(current.val);
        current.left && stack.push(current.left)
    }
    return res;
}

// 341. flatten nested list iterator