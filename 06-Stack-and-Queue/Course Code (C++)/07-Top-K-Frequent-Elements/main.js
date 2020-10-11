// 优先队列
// 优先队列的底层实现：堆
// 需要会白板编程

// 最大堆/最小堆
// 347. top k frequent elements
// 给定一个非空数组，返回前k个出现频率最高的元素。

// 维护一个含有k个元素的优先队列。
// O(nlogk)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function(nums, k) {
    // 统计每个元素出现的频率，使用 freq
    const freq = new freq();
    nums.map((num) => {
        if (freq.has(num)) {
            freq.set(num, freq.get(num)+1)
        }
        else {
            freq.set(num, 1)
        }
    })
    // 最小堆
    const heap = [] 
    // 如果元素数量小于等于 k
    if(freq.size <= k) {
        return [...freq.keys()]
    }
    // 如果元素数量大于 k，遍历freq，构建小顶堆
    // 从这里开始需要修改
    let i = 0
    freq.forEach((value, key) => {
        if (i < k) {
            // 取前k个建堆, 插入堆
            heap.push(key)
            // 原地建立前 k 堆
            if(i === k-1) {
                buildHeap(heap, freq, k)
            }
        } else if(freq.get(heap[1]) < value) {
            // 替换并堆化
            heap[1] = key
            // 自上而下式堆化第一个元素
            heapify(heap, freq, k, 1)
        }
        i++
    })
    // 删除heap中第一个元素
    heap.shift()
    return heap
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (heap, freq, k) => {
    if(k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for(let i = Math.floor(k/2); i>=1 ; i--) {
        heapify(heap, freq, k, i)
    }
}

// 堆化
let heapify = (heap, freq, k, i) => {
    // 自上而下式堆化
    while(true) {
        let minIndex = i
        if(2*i <= k && freq.get(heap[2*i]) < freq.get(heap[i])) {
            minIndex = 2*i
        }
        if(2*i+1 <= k && freq.get(heap[2*i+1]) < freq.get(heap[minIndex])) {
            minIndex = 2*i+1
        }
        if(minIndex !== i) {
            swap(heap, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 堆的算法需要修改
// 347.
// 23. merge k sorted lists