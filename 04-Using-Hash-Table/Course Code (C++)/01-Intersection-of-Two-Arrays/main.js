// 查找问题
// 两类查找问题
/*
1. 查找有无
  元素是否存在？set 集合
2. 查找对应关系（健值对应）
  元素出现了几次？map 字典
*/

// 349. intersection of two arrays
// nums1 = [1,2,2,1], nums2 = [2,2]
// 求两个数组的公共元素，结果为[2]

/*
  最后来看时间复杂度的问题
  js 是使用 哈希表 实现 map set
  插入 O(1)
  查找 O(1)
  删除 O(1)
  哈希表的缺点是失去了数据的顺序性
 */
function intersection(nums1, nums2) {
  // 遍历数组，插入 O(n)
  const record = new Set(nums1);
  // O(n)
  const resultSet = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (record.has(nums2[i])) {
      resultSet.add(nums2[i])
    }
  }
  // O(n)
  return [...resultSet]
}
// 所以 时间复杂度 O(n)
console.log(intersection([1, 2, 2, 1], [2,2]))