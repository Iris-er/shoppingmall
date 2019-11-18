import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import VueScroller from 'vue-scroller'
import router from './router/index'
import '@/assets/styles/iconfont.css'
import { post, fetch } from "../config/axios"
Vue.prototype.$get = fetch
Vue.prototype.$post = post

//请求接口示例：因为设置了默认axios的接口地址，所以直接写后面的接口名字就行
// this.$get("/posts").then((res)=>{
//   console.log(res)
// })
// vue-scroller刷新组件
Vue.use(VueScroller)
// 添加Fastclick移除移动端点击延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
