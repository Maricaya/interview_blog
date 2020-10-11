// 24. swap nodes in paris
// 1->2->3->4->null
// 2->1->4->3->null
function swapParis(head) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let p = dummyHead;
    while(p.next && p.next.next) {
        let node1 = p.next;
        let node2 = node1.next;
        let next = node2.next;

        node2.next = node1;
        node1.next = next;
        p.next = node2;

        p = node1;
    }
    const resultNode = dummyHead.next;
    dummyHead.next = null;

    return resultNode;
}

// 练习题 25 reverse nodes in k-group
// 147 insertion sort list 插入排序
// 148 sort list 归并排序 
