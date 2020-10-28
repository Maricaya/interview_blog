---
sidebarDepth: 3
---
# 观察者模式
```js
export class Event {
  constructor() {
    /*
    * {
        click:[fn1,fn2],
        mouseover: [fn3,fn4]
      }
    * */
    this.events = {}
  }
  /**
   * on 添加事件监听
   * @param {string} event
   * @param {function(): void} cb
   * @param {boolean} once
   */
  on(event, cb, once = false) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    if (!this.events[event].includes(cb)) {
      cb.once = once
      this.events[event].push(cb)
    }
  }
  /**
   * off  取消事件监听
   * @param {string} event
   * @param {function(): void} cb
   */
  off(event, cb) {
    if (this.events[event]) {
      if (cb === undefined) {
        this.events[event] = []
      } else {
        this.events[event] = this.events[event].filter(f => f !== cb);
      }
    }
  }
  // 在内部定义一个函数，该函数只会执行一次，执行完后立即清除，即调用off方法
  /**
   * once 只执行一次
   * @param {string} event
   * @param {function(): void} cb
   */
  once(event, cb) {
    this.on(event, cb, true)
  }
  /**
   * emit 执行函数
   * @param {string} event
   */
  emit(event) {
    if (this.events[event]) {
      this.events[event].forEach(f => {
        // f this指向Event实例
        f.call(this, ...Array.from(arguments).slice(1))
        if (f.once) {
          this.off(event, f)
        }
      })
    }
  }
}

class Subject {
  observers = []
  notify() {
    this.observers.forEach(observer =>{
      observer.call(this, arguments)
    })
  }
  attach (observer) {
    this.observers.push(observer)
  }
}

const subject = new Subject()
subject.attach(function () {console.log(111)})
subject.notify()
```
