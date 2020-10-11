// 双指针技术
// 19. remove nth node from end of list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 解法1: 
// 先遍历一遍计算链表长度，再遍历一遍删除倒数第n个节点

// 解法2:
// 能不能只遍历一遍？
// 两个指针 p q，之间间隔 n
// p先指向假的首节点，然后挪动 p q，直到 q 指向 null
// 删除 p指向的节点
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let p = dummyHead;
    let q = dummyHead;
    for (let i = 0; i < n+1; i++) {
        q = q.next;        
    }
    while(q) {
        p = p.next
        q = q.next
    }
    const delNode = p.next;
    p.next = delNode.next;
    return dummyHead.next;
};

// 61. retate list
// 143. reorder list
// 234. palindrome linked list