// 如何构建/打印链表
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLinkedList(arr) {
    const n = arr.length
    if (n === 0) {
        return null;
    }
    const head = new ListNode(arr[0])
    let curNode = head
    for (let i = 1; i < n; i++) {
       curNode.next = new ListNode(arr[i])
       curNode = curNode.next
    }
    return head;
}

function printLinkedList (head) {
    let curNode = head;
    let res = '';
    while(curNode !== null) {
        res += curNode.val + ' -> '
        curNode = curNode.next
    }
    console.log(res, 'null')
}

const a = createLinkedList([1, 2, 3])
printLinkedList(a)

// 课后习题
// 83. remove duplicates from sorted list
// 86. partition list
// 328. odd even linked list
// 2. add two numbers
// 445. add two numbers ｜｜