// 不仅仅是穿针引线
// 237 delete node in a linked list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 把当前节点值变为下一个节点的值
// 删除下一个节点
var deleteNode = function(node) {
    // 边界处理
    if (node === null) {
        return
    }

    node.val = node.next.val;
    let delNode = node.next;
    node.next = delNode.next;

    delete delNode
};