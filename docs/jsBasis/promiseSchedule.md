---
sidebarDepth: 3
---
# promise schedule
- 实现一个带并发限制的异步调度器 `Scheduler`
- 保证同时运行的任务最多有两个完善 `Scheduler` 类

## 思路

异步任务转为 promise 对象
- resolve 挂载在 异步任务上，以后执行的时候 直接 resolve
- 当前执行任务 < 2
  - 推入 当前执行任务 runningTasks
  - 执行
  - 从 runningTasks 中移除改任务
  - 如果还有任务等待执行 waitingTasks
  - 重复（推入-执行-检查）

## 完整版

```js
class Scheduler {
  constructor() {
    this.runningTasks = []
    this.waitingTasks = []
  }
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      promiseCreator.resolve = resolve
      if (this.runningTasks.length < 2) {
        this.pushAndRun(promiseCreator)
      } else {
        this.waitingTasks.push(promiseCreator)
      }
    })
  }
  pushAndRun(promiseCreator) {
    this.runningTasks.push(promiseCreator)
    promiseCreator.then(() => {
      promiseCreator.resolve()
      // 完成的移除
      const index = this.runningTasks.findIndex(promiseCreator)
      this.runningTasks.slice(index, 1)
      if (this.waitingTasks.length > 2) {
        // 移入一个
        this.pushAndRun(this.waitingTasks.shift())
      }
    })
  }
}

const scheduler = new Scheduler()

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(400, 4)
addTask(200, 2)
addTask(300, 3)
addTask(100, 1)

```
