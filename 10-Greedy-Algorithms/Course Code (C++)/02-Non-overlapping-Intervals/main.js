// 贪心算法与冬天规划算法的关系
// 435. non-overlapping intervals
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    intervals.sort((a, b) => {
        if (a.start != b.start) {
            return a.start < b.start
        }
        return a.end < b.end;
    })
    // memo[i] 表示使用 intervals[0...i]的区间
    // 能构成的最长不重叠序列
    const memo = new Array(intervals.length).fill(1)
    for (let i = 1; i < intervals.length; i++) {
        // memo[i]
        for (let j = 0; j < i; j++) {
            if (intervals[i].start >= intervals[j].end) {
                memo[i] = Math.max(memo[i], 1+memo[j])
            }
        }
    }
    return memo.reduce((res, cur) => Math.max(res, cur))
};