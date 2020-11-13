---
sidebarDepth: 3
---
# 数组拍平 & 去重

## 1. arr.flat()

## 2. reduce
```js
function flatten (arr) {
  return arr.reduce((res, cur) => 
    res.concat(Array.isArray(cur) ? flatten(cur) : cur)
  , [])    
}
```
## 数组深度
```js
function getDepth (object) {
  let level = 1
  if (typeof object !== 'object' && object === null) {
    return level
  }
  // for in 对象 | for of 可迭代对象 数组、map
  for(let key in object) {
    if (object.hasOwnProperty(key)) {
      let depth = getDepth(object[key]) + 1
      level = Math.max(depth, level)
    } 
  }
  return level
}
console.log(getDepth(1)) // 1
console.log(getDepth(null)) // 1
console.log(getDepth({})) // 1
console.log(getDepth({ a: 1 })) // 2
console.log(getDepth({ a: 1, b: { c: 2 } })) // 3
console.log(getDepth({ a: { c: 3 }, b: 2 })) // 3
```

## 二叉树深度
```js
var maxDepth = function(root) {
   if (root === null) {
        return 0
    }
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right) + 1
};
```


# 去重
## 1. indexOf
```js
function unique(arr) {
  return arr.filter((value, index) => 
     arr.indexOf(value) === index
  )
}
```

## 2. set
```js
[...new Set(arr)]
```

