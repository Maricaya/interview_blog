---
sidebarDepth: 3
---
# 新特性

[【Vue3.0】尤雨溪 - 聊聊 Vue.js 3.0 Beta 官方直播完整版 2020-04-21](https://www.bilibili.com/video/av837839066/)

## 六大亮点
- Proxy：不只是解决了 `defineProperty` 的局限性。
- `Performance`：性能更比 Vue 2.0 强。
- `Tree shaking support`：可以将无用模块“剪辑”，仅打包需要的。
- `Composition API`：组合 API。
- `Fragment, Teleport, Suspense`：“碎片”，`Teleport` 即 `Protal` 传送门，“悬念”。
- `Better TypeScript support`：更优秀的 `Ts` 支持。
- `Custom Renderer API`：暴露了自定义渲染 API。

## Performance
1. 重写了虚拟Dom的实现（且保证了兼容性，脱离模版的渲染需求旺盛）。
2. 编译模板的优化。
3. 更高效的组件初始化。
4. update性能提高1.3~2倍。
5. SSR速度提高了2~3倍。

### 要点1：编译模板的优化：不再遍历静态节点
Vue 在运行时会生成 `number`（大于0）值的 `PatchFlag`，用作标记动态节点。

仅带有 `PatchFlag` 标记的节点会被真正追踪，且无论层级嵌套多深，

它的动态节点都直接与 `Block` 根节点绑定，无需再去遍历静态节点

 ？
这样既跳出了 `virtual dom` 性能的瓶颈，又保留了可以手写 `render` 的灵活性。
 等于是：既有 `react` 的灵活性，又有基于模板的性能保证。
 
### 要点2: 事件监听缓存：`cacheHandlers`

假设我们要绑定一个事件：

```html
<div>
  <span @click="onClick">
    {{msg}}
  </span>
</div>
```

- 关闭 `CacheHandlers`：

    - `onClick` 会被视为 `PROPS` 动态绑定，后续替换点击事件时需要进行更新。
  
-  开启 cacheHandlers 后：

    - `cache[1]`，会自动生成并缓存一个内联函数，节点 `PatchFlags` 变成 1 （具有动态 `textContent` 的元素）。 Ps：相当于 `React中useCallback` 自动化。
    
## Tree shaking support
- 可以将无用模块“剪辑”，仅打包需要的（比如 `v-model`,`<transition>`，用不到就不会打包）。

- 一个简单 `“HelloWorld”` 大小仅为：13.5kb

    - 11.75kb，仅 `Composition API`。

-   包含运行时完整功能：22.5kb

    -   拥有更多的功能，却比Vue 2更迷你。


很多时候，我们并不需要 vue提供的所有功能，在 vue 2 并没有方式排除掉，但是 3.0 都可能做成了按需引入。

## Composition API

与React Hooks 类似的东西，实现方式不同。

- 可与现有的 Options API一起使用

- 灵活的逻辑组合与复用

- vue 3的响应式模块可以和其他框架搭配使用

混入(`mixin`) 将不再作为推荐使用， `Composition API` 可以实现更灵活且无副作用的复用代码。

[响应式系统 API](https://composition-api.vuejs.org/zh/api.html#readonly)
  
### `reactive`

### `ref`

### `watchEffect` 监听副作用 vs `watch` 监听
- 第一点我们可以从示例代码中看到 watchEffect 不需要指定监听的属性，他会自动的收集依赖， 只要我们回调中引用到了 响应式的属性， 那么当这些属性变更的时候，这个回调都会执行，而 watch 只能监听指定的属性而做出变更(v3开始可以同时指定多个)。

- 第二点就是 watch 可以获取到新值与旧值（更新前的值），而 watchEffect 是拿不到的。

- 第三点是 watchEffect 如果存在的话，在组件初始化的时候就会执行一次用以收集依赖（与computed同理），而后收集到的依赖发生变化，这个回调才会再次执行，而 watch 不需要，因为他一开始就指定了依赖。

### 与 React Hooks 相比
基于函数的组合式 API 提供了与 React Hooks 同等级别的逻辑组合能力，但是与它还是有很大不同：组合式 API 的 `setup()` 函数只会被调用一次，这意味着使用 Vue 组合式 API 的代码会是：

- 一般来说更符合惯用的 JavaScript 代码的直觉；

- 不需要顾虑调用顺序，也可以用在条件语句中；

- 不会在每次渲染时重复执行，以降低垃圾回收的压力；

- 不存在内联处理函数导致子组件永远更新的问题，也不需要 `useCallback`；

- 不存在忘记记录依赖的问题，也不需要“`useEffect`”和“`useMemo`”并传入依赖数组以捕获过时的变量。
    Vue 的自动依赖跟踪可以确保侦听器和计算值总是准确无误。

我们感谢 React Hooks 的创造性，它也是本提案的主要灵感来源，然而上面提到的一些问题存在于其设计之中，且我们发现 Vue 的响应式模型恰好为解决这些问题提供了一种思路。

## Fragment
Fragment 翻译为：“碎片”

- 不再限于模板中的单个根节点
- render 函数也可以返回数组了，类似实现了 React.Fragments 的功能 。
- 'Just works'

### `<Teleport>`

- 以前称为 `<Portal>`，译作传送门。
- 更多细节将由@Linusborg 分享

`<Teleport>` 原先是对标 `React Portal`（增加多个新功能，更强）
但因为 Chrome 有个提案，会增加一个名为Portal的原生element，为避免命名冲突，改为 `Teleport`

### `<Suspense>`
`Suspense` 翻译为：“悬念”

- 可在嵌套层级中等待嵌套的异步依赖项

- 支持 `async setup()`

- 支持异步组件

虽然 React 16 引入了 `Suspense`，但直至现在都不太能用。如何将其与异步数据结合，还没完整设计出来。

Vue 3 的 `<Suspense>` 更加轻量：

仅5%应用能感知运行时的调度差异，综合考虑下，Vue3 的 `<Suspense>` 没和React一样做运行调度处理

