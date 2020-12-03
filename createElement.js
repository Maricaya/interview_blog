// 浏览器是否支持 Symbol
// 支持Symbol的话，就创建一个Symbol类型的标识，否则就以二进制 0xeac7代替。
// 为什么是 Symbol？主要防止xss攻击伪造一个fake的react组件。
// 因为json中是不会存在symbol的.
const REACT_ELEMENT_TYPE = Symbol('react.element') 

function ReactElement(type, props) {
    return {
        typeof: REACT_ELEMENT_TYPE,
        type,
        props
    }
}


function createElement(type, config, ...children) {
    const props = {};

    for (let propName in config) {
        // 如果对象本身存在该属性值，就copy
        if (config.hasOwnProperty(propName)) {
            props[propName] = config[propName];
        }
    }

    props.children = children
    return ReactElement(type, props)
}
const h1 = createElement("h1", {className: "main"}, "Hello React")
console.log(h1)