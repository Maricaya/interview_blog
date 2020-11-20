(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{402:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ast、babel、依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ast、babel、依赖"}},[s._v("#")]),s._v(" AST、Babel、依赖")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Maricaya/my-babel-demo",target:"_blank",rel:"noopener noreferrer"}},[s._v("地址"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"先从-babel-说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先从-babel-说起"}},[s._v("#")]),s._v(" 先从 babel 说起")]),s._v(" "),a("p",[s._v("把es6 代码转换成 es5代码")]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("ol",[a("li",[s._v("parse 把代码 code 变成 AST")]),s._v(" "),a("li",[s._v("traverse 遍历 AST 进行修改")]),s._v(" "),a("li",[s._v("generate 把 AST 变成 code2\n即 code -- 1 --\x3e AST -- 2 --\x3e ast2 -- 3 --\x3e code")])]),s._v(" "),a("h3",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[s._v("#")]),s._v(" 代码示例")]),s._v(" "),a("p",[s._v("手动把 let 变成 var")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" parse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/parser"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" traverse "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/traverse"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" generate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/generator"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. parse 代码转换为 AST")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("let a = 'let'; let b = 2")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'module'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. traverse 遍历")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("enter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'VariableDeclaration'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("kind "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'let'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("kind "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'var'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. generate")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"为什么必须要用-ast-为什么不用正则来替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么必须要用-ast-为什么不用正则来替换"}},[s._v("#")]),s._v(" 为什么必须要用 AST，为什么不用正则来替换")]),s._v(" "),a("ul",[a("li",[s._v("你很难用正则表达式来替换，正则很容易把 "),a("code",[s._v("let a = 'let'")]),s._v(" 变成 "),a("code",[s._v("var a = 'var'")])]),s._v(" "),a("li",[s._v("你需要识别每个单词的意思，才能做到只修改用于声明变量的 let")]),s._v(" "),a("li",[s._v("而 AST 能明确告诉你每个 let 的意思")])]),s._v(" "),a("h3",{attrs:{id:"能不能自动把代码转为-es5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#能不能自动把代码转为-es5"}},[s._v("#")]),s._v(" 能不能自动把代码转为 ES5")]),s._v(" "),a("p",[s._v("可以，使用 "),a("code",[s._v("@babel/core")]),s._v(" 和 "),a("code",[s._v("@babel/preset-env")]),s._v(" 即可")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" parse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/parser'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" babel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/core'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("let a = 'let';let b = 2;const c = 3;")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'module'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("transformFromAstSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/preset-env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"不对-代码不应该是单独的文件吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不对-代码不应该是单独的文件吗"}},[s._v("#")]),s._v(" 不对，代码不应该是单独的文件吗？")]),s._v(" "),a("p",[s._v("我们来改造一下代码")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" parse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/parser'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" babel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/core'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'module'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("transformFromAstSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/preset-env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test.es5.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("思考题：如何把 "),a("code",[s._v("./test.js")]),s._v(" 变成任意文件呢")]),s._v(" "),a("h2",{attrs:{id:"分析-index-js-的依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析-index-js-的依赖"}},[s._v("#")]),s._v(" 分析 index.js 的依赖")]),s._v(" "),a("h3",{attrs:{id:"project1-deps-1-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project1-deps-1-ts"}},[s._v("#")]),s._v(" project1 & deps_1.ts")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("project1 有 3 个 JS 文件 "),a("code",[s._v("index.js/a.js/b.js")])])]),s._v(" "),a("li",[a("p",[s._v("依赖关系是 index -> a/b")])])]),s._v(" "),a("p",[s._v("运行 "),a("code",[s._v("deps_1.ts")]),s._v(" 得到结果")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" ts deps_1.ts     \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run v1.22.4\n$ node -r ts-node/register deps_1.ts\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.js'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    deps: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a.js'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b.js'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    code: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v(" +\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"import a from './a.js'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" +\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"import b from './b.js'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" +\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'console.log(a.value + b.value)"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h4",{attrs:{id:"代码思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码思路"}},[s._v("#")]),s._v(" 代码思路")]),s._v(" "),a("ol",[a("li",[s._v("调用 collectCodeAndDeps('index.js')")]),s._v(" "),a("li",[s._v("先把 depRelation['index.js'] 初始化为 { deps: [], code: 'index 的源码' }")]),s._v(" "),a("li",[s._v("然后把 index.js 源码 code 变成 ast")]),s._v(" "),a("li",[s._v("遍历 ast，看看 import 了哪些依赖，依赖了 a.js 和 b.js")]),s._v(" "),a("li",[s._v("把 a.js 和 b.js 写到 depRelation['index.js'].deps 里")]),s._v(" "),a("li",[s._v("最终得到的 depRelation 就收集了 index.js 的依赖")])]),s._v(" "),a("h4",{attrs:{id:"启发-用哈希表来存储文件的依赖关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启发-用哈希表来存储文件的依赖关系"}},[s._v("#")]),s._v(" 启发：用哈希表来存储文件的依赖关系")]),s._v(" "),a("p",[s._v("*哈希表是数据结构中的术语，在 js 中一个对象就可以看作一个哈希表。\n这是计数排序的基本操作")]),s._v(" "),a("h2",{attrs:{id:"递归地分析嵌套依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归地分析嵌套依赖"}},[s._v("#")]),s._v(" 递归地分析嵌套依赖")]),s._v(" "),a("h3",{attrs:{id:"三层依赖关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三层依赖关系"}},[s._v("#")]),s._v(" 三层依赖关系")]),s._v(" "),a("ul",[a("li",[s._v("index -> a -> dir/a2 -> dir/dir_in_dir/a3")]),s._v(" "),a("li",[s._v("index -> b -> dir/b2 -> dir/dir_in_dir/b3")]),s._v(" "),a("li",[s._v("文件在 project_2")])]),s._v(" "),a("h3",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("ul",[a("li",[s._v("collectCodeAndDeps 太长了，改为 collect")]),s._v(" "),a("li",[s._v("调用 collect('index.js')")]),s._v(" "),a("li",[s._v("发现依赖 './a.js' 于是调用 collect('dir/a2.js')")]),s._v(" "),a("li",[s._v("发现依赖 './dir_in_dir/a3.js' 于是调用 collect('dir/dir_in_dir/a3.js)")]),s._v(" "),a("li",[s._v("没有更多依赖，a.js 这条线就结束，发现下一个依赖 './b.js'")]),s._v(" "),a("li",[s._v("依次类推，其实就是递归")])]),s._v(" "),a("h3",{attrs:{id:"启发-用递归来获取嵌套依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启发-用递归来获取嵌套依赖"}},[s._v("#")]),s._v(" 启发：用递归来获取嵌套依赖")]),s._v(" "),a("p",[s._v("递归存在 call stack 溢出的风险，比如嵌套层数超过 20000 时，程序直接崩溃")]),s._v(" "),a("h2",{attrs:{id:"静态分析循环依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态分析循环依赖"}},[s._v("#")]),s._v(" 静态分析循环依赖")]),s._v(" "),a("p",[s._v("再复杂一点：循环依赖 (project_3)")]),s._v(" "),a("h3",{attrs:{id:"依赖关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系"}},[s._v("#")]),s._v(" 依赖关系")]),s._v(" "),a("ul",[a("li",[s._v("index -> a -> b")]),s._v(" "),a("li",[s._v("index -> b -> a")])]),s._v(" "),a("h4",{attrs:{id:"求值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求值"}},[s._v("#")]),s._v(" 求值")]),s._v(" "),a("ul",[a("li",[s._v("a.value = b.value + 1")]),s._v(" "),a("li",[s._v("b.value = a.value + 1")])]),s._v(" "),a("h3",{attrs:{id:"试着运行下代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#试着运行下代码"}},[s._v("#")]),s._v(" 试着运行下代码")]),s._v(" "),a("ul",[a("li",[s._v("报错：调用栈 溢出了")]),s._v(" "),a("li",[s._v("为什么：过程 a -> b -> a -> b -> a -> b -> a ... 把调用栈撑满了")])]),s._v(" "),a("h3",{attrs:{id:"你是说「不能循环依赖」吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你是说「不能循环依赖」吗"}},[s._v("#")]),s._v(" 你是说「不能循环依赖」吗？")]),s._v(" "),a("p",[s._v("并不是这样，我们需要一些小技巧")]),s._v(" "),a("h3",{attrs:{id:"避免重复进入同一循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免重复进入同一循环"}},[s._v("#")]),s._v(" 避免重复进入同一循环")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("collectCodeAndDeps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filepath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getProjectPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filepath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件的项目路径，如 index.js")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("depRelation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("duplicated dependency: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意，重复依赖不一定是循环依赖")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("一旦发现这个 key 已经在 keys 里了，就 return")]),s._v(" "),a("li",[s._v("这样分析过程就不是 a -> b -> a -> b -> ... , 而是 a -> b -> return")]),s._v(" "),a("li",[s._v("注意我们只需要"),a("strong",[s._v("分析依赖")]),s._v("，不需要"),a("strong",[s._v("执行代码")]),s._v("，所以这样分析是可行的")]),s._v(" "),a("li",[s._v("由于我们的分析不需要执行代码，所以叫做"),a("strong",[s._v("静态分析")])]),s._v(" "),a("li",[s._v("但如果我们"),a("strong",[s._v("执行代码")]),s._v("，就会发现还是出现了循环")])]),s._v(" "),a("p",[s._v("如果执行，还是会报错的")]),s._v(" "),a("blockquote",[a("p",[s._v("分析是分析，执行是执行")])]),s._v(" "),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("模块间可以循环依赖")]),s._v(" "),a("ul",[a("li",[s._v("a依赖b，b依赖a")]),s._v(" "),a("li",[s._v("a依赖b，b依赖c，c依赖a")])])]),s._v(" "),a("li",[a("p",[s._v("但不能有逻辑绿皮的拍卖会")]),s._v(" "),a("ul",[a("li",[s._v("a.value = b.value+1")]),s._v(" "),a("li",[s._v("b.value = a.value+1")]),s._v(" "),a("li",[s._v("这种就不行")])])]),s._v(" "),a("li",[a("p",[s._v("那你能不能写一个没有逻辑漏洞的循环依赖？")]),s._v(" "),a("ul",[a("li",[s._v("当然可以，继续看吧（project_5)")]),s._v(" "),a("li",[s._v("有的循环依赖是有问题的，有的循环依赖是没有问题的")]),s._v(" "),a("li",[s._v("所有最好别用循环依赖，以防万一")])])])]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("AST 相关")]),s._v(" "),a("ol",[a("li",[s._v("parse 把代码 code 变成 AST")]),s._v(" "),a("li",[s._v("traverse 遍历 AST 进行修改")]),s._v(" "),a("li",[s._v("generate 把 AST 变成 code2")])])]),s._v(" "),a("li",[a("p",[s._v("工具")]),s._v(" "),a("ol",[a("li",[s._v("babel 可以把高级代码翻译为 ES5")]),s._v(" "),a("li",[s._v("@babel/parse")]),s._v(" "),a("li",[s._v("@babel/traverse")]),s._v(" "),a("li",[s._v("@babel/generate")]),s._v(" "),a("li",[s._v("@babel/core 包含前三者")]),s._v(" "),a("li",[s._v("@babel/preset-env 内置很多规则则")])])]),s._v(" "),a("li",[a("p",[s._v("代码技巧")]),s._v(" "),a("ol",[a("li",[s._v("使用哈希表来存储数据")]),s._v(" "),a("li",[s._v("通过检测 key 来避免重复")])])]),s._v(" "),a("li",[a("p",[s._v("循环依赖")]),s._v(" "),a("ol",[a("li",[s._v("有的循环依赖可以正常执行")]),s._v(" "),a("li",[s._v("有的循环依赖不可以")]),s._v(" "),a("li",[s._v("但都可以做静态分析")])]),s._v(" "),a("h2",{attrs:{id:"babel-和-babel-ployfill-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-和-babel-ployfill-的关系"}},[s._v("#")]),s._v(" babel 和 babel ployfill 的关系")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v(" 1、先来理解下 babel 到底是做什么的？\n \n 简单来讲，babel解决语法层面的问题。用于将ES6+的高级语法转为ES5。\n \n 2、babel polyfill 又是做什么的？\n \n 如果要解决API层面的问题，需要使用垫片。比如常见的有babel-polyfill、babel-runtime 和 babel-plugin-transform-runtime。\n")])])])])]),s._v(" "),a("h1",{attrs:{id:"polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polyfill"}},[s._v("#")]),s._v(" polyfill")]),s._v(" "),a("p",[s._v("https://www.zhihu.com/question/49382420")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Babel 是处于构建时（也就是传统Java等语言的编译时），「转换syntax层语法」")])]),s._v(" "),a("li",[a("p",[s._v("转译出来的结果在默认情况下并不包括 ES6 对运行时的扩展，")]),s._v(" "),a("ul",[a("li",[s._v("builtins（内建，包括 Promise、Set、Map 等）")]),s._v(" "),a("li",[s._v("内建类型上的原型扩展（如 ES6 对 Array、Object、String 等内建类型原型上的扩展）")]),s._v(" "),a("li",[s._v("Regenerator（用于generators / yield）等都不包括在内。")])])])]),s._v(" "),a("p",[s._v("总结：\nbabel-runtime 库，\n"),a("code",[s._v("polyfill")]),s._v("： 是看你的项目所需要的运行的浏览器环境决定的,不是必须的Babel只是转换syntax层语法,所有需要"),a("code",[s._v("@babel/ployfill")]),s._v(" 来处理API兼容,又因为 "),a("code",[s._v("ployfill")]),s._v(" 体积太大，")]),s._v(" "),a("p",[s._v("所以通过 "),a("code",[s._v("preset")]),s._v(" 的 useBuiltIns 来实现按需加载。")]),s._v(" "),a("p",[s._v("再接着为了满足 npm 组件开发的需要 出现了 "),a("code",[s._v("@babel/runtime")]),s._v(" 来做隔离。\n"),a("code",[s._v("babel-plugin-transform-runtime")])])])}),[],!1,null,null,null);t.default=e.exports}}]);