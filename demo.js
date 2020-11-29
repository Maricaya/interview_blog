 // 节点
function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
}
function DoublyLinkedList () {
    // 属性 
    this.head = null
    this.tail = null
    this.length = 0
}

// append 给连标尾部
DoublyLinkedList.prototype.append = function (element) {
    // 1. 根据新元素创建节点
    const newNode = new Node(element)
    // 2. 判断原来链表是否为空
    if (this.head === null) {
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
    // 3. 链表长度+1
    this.length++
}

// 2. 将 链表 转化为字符串形式
DoublyLinkedList.prototype.toString = function () {
    return this.backwardString()
}

// 2.2 forwardString
DoublyLinkedList.prototype.forwardString = function () {
    let current = this.tail
    let resultString = ''
    while(current) {
        resultString += current.data
        current = current.prev
    }
    return resultString
}
// 2.3 backwardString
DoublyLinkedList.prototype.backwardString = function () {
    // 1. 定义变量
    let current = this.head
    let resultString = ''
    // 2. 以此向后遍历，获取每一个节点
    while (current) {
        resultString += current.data
        current = current.next
    }
    return resultString
}

// 3. insert
DoublyLinkedList.prototype.insert = function (postion, data) {
    // 1. 越界判断
    if (postion < 0 || postion > this.length) {
        return false
    }
    // 2. 根据 data 创建新的节点
    const newNode = new Node(data)
    // 3. 判断原来的列表是否为空
    if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
    } else {
        // 3.1 判断 postion 是否为空
        if (postion === 0) {
            // this.head 是原来的第一个节点
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        // 3.2 最后一个节点
        else if (postion === this.length) {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        // 3.3 插入中间某个位置
        else {
            let current = this.head
            let index = 0
            while(index++ < postion) {
                current = current.next
            }
            // 3.3.1 修改指针
            newNode.prev = current.prev
            newNode.next = current
            current.prev.next = newNode
            current.prev = newNode
        }
    }
    this.length++
    return true
}

// 4. get
DoublyLinkedList.prototype.get = function (postion) {
    // 1. 越界判断
    if (postion < 0 || postion >= this.length) {
        return null
    }
    // 2. 获取元素
    let current = this.head
    let index = 0
    while(index++ < postion) {
        current = current.next
    }
    return current.data
}

// 5. indexOf
DoublyLinkedList.prototype.indexOf = function (data) {
    // 1. 定义变量
    let current = this.head
    let index = 0
    while(current) {
        if (current.data === data) {
            return index
        }
        current = current.next
        index++
    }
    return -1
}

// 6. update
DoublyLinkedList.prototype.update = function (position, newData) {
    // 1. 越界判断
    if (position < 0 || position >= this.length) {
        return false
    }
    // 2. 寻找正确的节点
    let current = this.head
    let index = 0
    while(index++ < position) {
        current = current.next
    }
    // 3. 修改找到节点的data信息
    current.data = newData
    return true
}

// 7. removeAt
DoublyLinkedList.prototype.removeAt = function (position) {
    // 1. 越界判断
    if (position < 0 || position >= this.length) {
        return null
    }
    let current = this.head
    // 2. 判断是否只有一个节点
    if (this.length === 1) {
        this.head = null
        this.tail = null
    } else {
        // 2.1 删除第一个节点
        if (position === 0) {
            this.head.next.prev = null
            this.head = this.head.next
        }
        // 删除最后的节点
        else if (position === this.length - 1) {
            current = this.tail
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else {
            let index = 0
            while(index++ < position) {
                current = current.next
            }
            current.prev.next = current.next
            current.next.prev = current.prev
        }
    }
    this.length--
    return current.data
}
// 8. remove
DoublyLinkedList.prototype.remove = function (data) {
    // 1. 根据 data 获取下标值
    const index = this.indexOf(data)
    return this.removeAt(index)
}
// test 
const list = new DoublyLinkedList()
// 1. 测试 append
list.append('a')
list.append('b')
list.append('c')

console.log(list.backwardString())
console.log(list.forwardString())
console.log(list.toString())

// 3. 测试 插入
list.insert(0, '-')
list.insert(4, 'd')
list.insert(2, '.')
console.log(list.toString())

// 4. get
console.log(list.get(2, '.'))

// 5. indexOf
console.log(list.indexOf('a'))
console.log(list.indexOf('e'))

// 6. 测试 update 方法
list.update(0, '---')
console.log(list.toString())
// 7. removeAt
list.removeAt(0)
console.log(list.toString())
list.removeAt(2)
console.log(list.toString())
