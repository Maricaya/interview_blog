// 226. invert binary tree
function invert(root) {
    if(root===null){
        return null
    }
    invertTree(root.left)
    invertTree(root.right)
    let temp = root.left
    root.left = root.right
    root.right = temp
    return root
}
// 100. same tree
// 101. symmetric tree
// 222. count complete tree nodes
// 110. balabced binary tree