// 203.remove linked list elements
// 设置虚拟头节点 dummyHead
function removeElements(head, val) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head;

    let cur = dummyHead;
    while(cur.next !== null) {
        // 如果待删除的节点不是头节点
        if(cur.next.val === val) {
            // 删除 cur.next
            let delNode = cur.next
            cur.next = delNode.next
            delNode.next = null
        } else {
            cur = cur.next
        }
    }
    const resultNode = dummyHead.next;
    resultNode.next = null;
    return resultNode;
}

// 82. remove duplicates from sorted list ||
// 21. merge two sorted lists