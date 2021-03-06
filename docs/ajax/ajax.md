---
sidebarDepth: 3
---
# 手写ajax
## 实现功能

```js
ajax({
  url: 'xxx',
  method: 'GET | POST | JSONP',
  params: {},
  timeout: 1000
})
.then()
.catch()
```

## 处理传入参数

```js
function handleData(data) {
  let sendData = ''
  for (const dataKey in data) {
    sendData += `&${dataKey}=${data[dataKey]}`
  }
  sendData = sendData.slice(1) // &a=123&b=456
  // a=123&b=456
  return sendData
}

```

## GET & POST
- ajax 四步
    -   `const xhr = new XMLHttpRequest()` 
    -   `xhr.open(method, url, true)`
    -   `xhr.send(sendData);`
    -   `xhr.onreadystatechange = function () {` 
          -  `if (xhr.readyState === 4) {`
              -    `if (xhr.status === 200) {}`

- GET 
    -   `xhr.open('GET', url?a=1&b=2, true);`
    -   `xhr.send(null);`

- POST 
    -   `xhr.open('POST', url, true);`
    -   `xhr.send(a=1&b=2);`

```js
function ajax({url, method, data, timeout}) {
  return new Promise((resolve, reject) => {
      let sendData = handleData(data)
      if (method === 'GET') {
        url += '?' + sendData
        sendData = null
      }
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.timeout = timeout
      xhr.send(sendData);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response)
          } else {
            reject(xhr)
          }
        }
      }
  })
}
```

## JSONP

- 创建 `script`

- `script.src = src?a=1&callback=callbackName`

-  `script` 插入页面 `document.body.appendChild(script)`

- 执行 `callback` `window[callbackName]=(value) => {}`

    - `callback` 中移除 `script.parentNode.removeChild(script)`

```js
function ajax({url, method, data, timeout, callback = 'callback'}) {
  return new Promise((resolve, reject) => {
      let timer = null
      data.callback = callback
      const sendData = handleData(data)
      let script = document.createElement('script')
      script.src = url + '?' + sendData
      // https://photo.sina.cn/aj/index?page=1&cate=recommend&callback=callback
      document.body.appendChild(script)
      window[callback] = (value) => {
        if (timeout) {
          clearTimeout(timer)
        }
        resolve(value)
        //移除script元素
        script.parentNode.removeChild(script)
      }
      
      if (timeout) {
        timer = setTimeout(() => {
          reject('network err, timeout')        
        }, timeout)
      } 
      script.onerror = function (e) { 
        reject(e)
      }
  })
}
```

## 完整代码
```js
// 简洁版 jsonp
ajax({
  url: 'http://ux.lezhixing.com.cn/mock/286/jw/schedule/filter/query.do',
  method: 'GET',
  data: {type: 'student'},
  timeout: 2000
}).then((data) => {
  console.log(data)
})
ajax({
  url: 'http://ux.lezhixing.com.cn/mock/385/region/schedule/role/add.do',
  method: 'POST',
  data: {userId: 1, role: 1},
  timeout: 2000
}).then((data) => {
  console.log(data)
}).catch()
// //请求数据
ajax({
  url: 'https://photo.sina.cn/aj/index',
  method: 'JSONP',
  data: {page: 1, cate: 'recommend'}
}).then(data => {
  console.log(data)
})

function handleData(data) {
  let sendData = ''
  for (const dataKey in data) {
    sendData += `&${dataKey}=${data[dataKey]}`
  }
  sendData = sendData.slice(1)
  // a=123&b=456
  return sendData
}
function ajax({url, method, data, timeout, callback = 'callback'}) {
  return new Promise((resolve, reject) => {
    if (method === 'JSONP') {
      data.callback = callback
      const sendData = handleData(data)
      let script = document.createElement('script')
      script.src = url + '?' + sendData
      // https://photo.sina.cn/aj/index?page=1&cate=recommend&callback=callback
      document.body.appendChild(script)
      window[callback] = (value) => {
        try {
          resolve(value)
        } catch (e) {
          reject(e)
        }
        //移除script元素
        script.parentNode.removeChild(script)
      }
    }
    else {
      let sendData = handleData(data)
      if (method === 'GET') {
        url += '?' + sendData
        sendData = null
      }
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.timeout = timeout
      xhr.send(sendData);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response)
          } else {
            reject(xhr)
          }
        }
      }
    }
  })
}
```
