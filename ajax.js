// 简洁版 jsonp
ajax({
  url: 'http://ux.lezhixing.com.cn/mock/286/jw/schedule/filter/query.do',
  method: 'GET',
  data: {type: 'student'},
  timeout: 2000
}).then((data) => {
  console.log(data)
}).catch()

ajax({
  url: 'http://ux.lezhixing.com.cn/mock/385/region/schedule/role/add.do',
  method: 'POST',
  data: {userId: 1,role: 1},
  timeout: 2000
}).then((data) => {
  console.log(data)
}).catch()
function ajax({url, method, data, timeout}) {
  const xhr = new XMLHttpRequest()
  let sendData = ''
  for (const dataKey in data) {
    sendData += `&${dataKey}=${data[dataKey]}`
  }
  if (sendData) {
    sendData = sendData.slice(1)
    switch (method) {
      case 'GET':
        url += sendData
        sendData = null
        break
    }
  }
  return new Promise(((resolve, reject) => {
    xhr.open(method, url, true)
    xhr.timeout = timeout
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject(xhr)
        }
      }
    }
  }))

}

