let findKthLargest = function (nums, k) {
  let heap = ['',]
  for (let i = 0; i < k; i++) {
    heapInsert(heap, nums[i])
  }
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      heap[1] = nums[i]
      shiftDown(heap, k,1)
    }
  }
  console.log(heap)
}

function heapInsert(heap, num) {
  heap.push(num)
  shiftUp(heap, heap.length - 1)
}

function shiftUp(heap, i) {
  while (heap[Math.floor(i / 2)] > heap[i]) {
    swap(heap, i, Math.floor(i / 2))
    i = Math.floor(i / 2)
  }
}

function shiftDown(heap, k,  i) {
  while (true) {
    let minIndex = i
    if (i*2 <= k && heap[i*2] < heap[minIndex]) {
        minIndex = i * 2
    }
    if (i*2 + 1 <= k && heap[i*2 + 1] < heap[minIndex]) {
      minIndex = i * 2 + 1
    }
    if (minIndex !== i) {
      swap(heap, i, minIndex)
      i = minIndex
    } else {break}
  }
}

function swap(arr, l, r) {
  [arr[l], arr[r]] = [arr[r], arr[l]]
}
findKthLargest([5, 4, 6, 1], 4)
