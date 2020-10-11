// 数组中的问题其实最常见
// 排序：选择排序/插入排序/归并排序/快速排序
// 查找：二分查找法
// 数据结构：栈/队列/堆

// 二分查找法
function binarySearch(arr, target){
    const n = arr.length;
    let l = 0, r = n - 1
    // [l, ... r] 范围里找 target
    while(l <= r) {
        // 当 l == r 时，区间[l...r]依然是有效的
        let mid = l + parseInt((l-r)/2)
        if (arr[mid] === target) {
            return mid;
        }
        if (target > arr[mid]) {
            l = mid + 1 // target 在 [mid + 1, ... r] 之间
        }else {
            r = mid - 1 // target 在 [l ... mid-1]之间
        }
    }
    return -1
}