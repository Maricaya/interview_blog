// 在链表中穿针引线
// 206 reverse linked list
// pre cur next 三个指针

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function(head) {
    if (head === null) {
        return head;
    }
    let pre = null;
    let cur = head;
    while(cur !== null) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;     
    }
    return pre;
};

// 练习题 92 reverse linked list ||
// 只反转 m 到 n 的链表
