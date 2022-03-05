import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import DemoCard from '../components/lib/DemoCard/index.js'
// // Vue.component('name', Demo)
// Vue.use(DemoCard) //这个方法实际是调用 index.js 里的 Demo.install , 而 install 里面就是用了上面那一行 Vue.component() 方法
import 'fanjy-ui/dist/css/index.css'
import FUI from 'fanjy-ui'
Vue.use(FUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
