import { createApp } from "vue"
import Hello from "./vue_demo/Hello.vue"
import {sum} from "./utils/math"
import "./component/cpn"


const message = "hello world"

console.log(sum(12, 23))
console.log(sum(45, 67))

console.log(message.length)

const bar = ()=>{
  console.log("bar function")
}

bar()
bar()

// vue
createApp(Hello).mount('#app')