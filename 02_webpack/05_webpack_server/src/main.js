import { createApp } from "vue"
import Hello from "./vue_demo/Hello.vue"
import {sum} from "./utils/math"
import "./component/cpn"


const message = "hello world xxxxx"

console.log(sum(12, 23))
console.log(sum(45, 67))
console.log("-----")

console.log(message.length)

const bar = ()=>{
  console.log("bar function")
}

bar()
bar()

// vue
createApp(Hello).mount('#app')
// wk.config.js中的DefinePlugin可以为代码注入全局变量
console.log(coderwhy)
console.log(counter)
// 默认是生产环境production，可以在wk.config.js的mode变成开发环境 development
console.log(process.env.NODE_ENV)


// 指定哪一个模块需要HMR
// if (module.hot){
//   module.hot.accept("./utils/math.js")
// }