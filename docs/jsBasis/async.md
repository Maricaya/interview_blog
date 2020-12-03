---
sidebarDepth: 3
---
# async await
 async / await 是一种更方便地完成异步调用的语法
 
 #### 基本含义
 async 使得后面的 function 始终返回一个 promise，无论 function 本身返回的是否是 promise。
 
 await 必须在 async 函数内部使用，只有等到 await 后面的部分执行完成后，函数才会继续往下执行。
 举例来说：
 
 ```js
 async function f() {
 
   const promise = new Promise((resolve, reject) = {
     setTimeout(() => resolve("done!"), 1000)
   })
 
   const result = await promise; // wait till the promise resolves (*)
 
   alert(result)
 
   alert('end of function')
 }
 
 f();
 ```
 
 执行结果：
 
 ```
 done
 end of function
 ```
 
 await 会把后面的 promise 放到 microtask queue 中，所以当 await 和 setTimeout 放到一起时，会先执行 await 的部分，再执行 setTimeout 的部分（setTimeout 会进入 macrotask，优先级低于 microtask）。比如：
 
```js
 async function f() {
  return 1;
 }
 (async () => {
     setTimeout(() => alert('setTimeout is done'), 0);
 
     await f();
     alert('await is done'); 
 })();
 ```
 
 执行结果：
 
 ```
 await is done
 setTimeout is done
 ```
 
 #### 基本原理
 async / await 本质上是 generator 的语法糖，与 generator 相比，多了以下几个特性：
 
 * 内置执行器，无需手动执行 `next()` 方法
 * await 后面的函数可以是 promise 对象也可以是普通 function，而 yield 关键字后面必须得是 thunk 函数或 promise 对象
 
 ```js
 async function fn(args) {
   // ...
 }
 ```
 
 等同于：
 
```js
 function fn(args) {
   return asyncToGenerator(function* () {
     // ...
   });
 }
 ```
 
而 asyncToGenerator 函数就是所谓的自动执行器了

 ```js
 function asyncToGenerator(genFunction) {
   return function () {
      const gen = genFunction.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(nextFunction) {
          let next;
          try {
            next = nextFunction();
          } catch(e) {
            return reject(e);
          }
          if (next.done) {
            return resolve(next.value);
          } else {
            return Promise.resolve(next.value).then((v) => {
              step(() => gen.next(v));
            }, (e) => {
              step(() => gen.throw(e));
            });
          }
        }
        step(() => gen.next(undefined));
    });
   }
 }
```

## 测试
```js
const getData = () =>
  new Promise(resolve => setTimeout(() => resolve("data"), 1000))

// 这样的一个async函数 应该再1秒后打印data
async function test() {
  const data = await getData()

  console.log(data)
  return data
}

// async函数会被编译成generator函数 (babel会编译成更本质的形态，这里我们直接用generator)
function* testG() {
  // await被编译成了yield
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return data + '123'
}

const testGAsync = asyncToGenerator(testG)
testGAsync().then(result => {
  console.log(result)
})
```

