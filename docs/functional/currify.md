---
sidebarDepth: 3
---

# 柯里化
https://github.com/ikcamp/Functional-Light-JS

https://www.youtube.com/watch?v=dkZFtimgAcM
## 定义
在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
>用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数。
 
## 实现
- 判断当前函数传入的参数是否大于或等于fn需要参数的数量，如果是，直接执行fn
- 如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回currying函数
```js
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  } else {
    return (...args2) => currying(fn, ...args, ...args2)
  }
}
```
我们来一个简单地实例验证一下：
```js
const curryingFun = currying(fun(1))
curryingFun(1)(2)(3);  // 1 2 3 
curryingFun(1, 2)(3);  // 1 2 3 
curryingFun(1, 2, 3);  // 1 2 3 
```

## 面试题
请实现一个 add 函数，满足以下功能
```js
add(1); 	// 1
add(1)(2);  	// 3
add(1)(2)(3);   // 6
add(1)(2, 3);   // 6
add(1, 2)(3);   // 6
add(1, 2, 3);   // 6
```
```js
function add (...args1) {
  let result = args1.reduce((pre, current) => pre + current, 0)

  function sum (...args2) {
    result = args2.reduce((prev, item) => prev + item, result)
    return sum
  }

  // 但是在计算完成后还是返回sum这个函数，这样就获取不到计算的结果了
  // 首先要知道JavaScript中，打印和相加计算，会分别调用toString或valueOf函数，所以我们重写tmp的toString和valueOf方法，返回sum的值；
  sum.toString = function () {
    return result
  }

  return sum
}

console.log(add(1))
console.log(add(1)(2))
console.log(add(1)(2)(3))
console.log(add(1, 2)(3, 4)(5))
console.log(add(1, 2, 3)(4)(5)(6))
```
