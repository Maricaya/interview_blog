// 454.4sum
// 4个整形数组ABCD
// 时间复杂度 O(n^2)
// 空间复杂度 O(n^2)
function fourSumCount(A, B, C, D) {
    const record = new Map()
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            if (record[ C[i] + D[j] ] > 0) {
                record[ C[i] + D[j] ] ++
            } else {
                record[ C[i] + D[j] ] = 1
            }
        }        
    }
    let res = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (record[0 - A[i] - B[j]]) {
                res += record[0 - A[i] - B[j]]
            }
        }        
    }
}

// 练习题 49. Group Anagrams