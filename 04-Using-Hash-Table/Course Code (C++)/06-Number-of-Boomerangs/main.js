// 447. number of boomerangs
// 时间复杂度：O(n^2)
// 空间复杂度：O(n)
function numberOfBoomerangs(points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        // 距离查找表 record
        const record = new Map()
        for (let j = 0; j < points.length; j++) {
            if (j !== i) {
                record[dis(points[i], points[j])] ++
            }            
        }        
    }
    record.forEach((value, key) => {
        if(value.second >= 2) {
            res = (value.second) * (value.second -1)
        }
    })
    return res
}

function dis(pa, pb) {
    return (pa.first - pb.first) * (pa.first - pb.first) 
    + (pa.second - pb.second) * (pa.second - pb.second)
}
// 联系
// 149
// 