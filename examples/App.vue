<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <m-card
      imgSrc="vue.jpg"
      summary="Vue2.0高级实战 开发移动端音乐APP" 
    />
    <m-card
      imgSrc="vue.jpg"
      summary="Vue2.0高级实战 开发移动端音乐APP" 
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人报名</div>
          <div class="price">￥299</div>
        </div>
      </template>
    </m-card>
    <m-card
      imgSrc="vue.jpg"
      :width="370"
      :imgHeight="90"
    >
      Vue2.0高级实战 开发移动端音乐APP
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 · 6门课</div>
          <div class="level">10695收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
// import DemoCard from '../components/lib/DemoCard/src/main.vue'

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
