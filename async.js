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

function asyncToGenerator(genFunction) {
    const gen = genFunction.apply(this, arguments);
    return new Promise((resolve, reject) => {
        step(() => gen.next());
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
                return Promise.resolve(next.value).then((data) => {
                step(() => gen.next(data));
                }, (e) => {
                step(() => gen.throw(e));
                });
            }
        }
    });
}

const testGAsync = asyncToGenerator(testG)
testGAsync.then(result => {
  console.log(result)
})