import DemoCard from './src/main.vue'

DemoCard.install = function(Vue) {
  Vue.component(DemoCard.name, DemoCard)
}

export default DemoCard