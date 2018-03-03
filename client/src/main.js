// import Vue from 'vue'
import Vue from 'vue'
import Start from './Start.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(Start),
  router
})
