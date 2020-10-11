// 栈和递归的紧密联系
// 144.binary tree preorder trvaersal
// 94.binary tree inorder trvaersal
// 145.binary tree postorder trvaersal
function preorder(node) {
    if (node) {
        console.log(node.val)
        preorder(node.left)
        preorder(node.right)
    }
}