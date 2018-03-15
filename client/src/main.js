// import Vue from 'vue'
import Vue from 'vue'
import Start from './Start.vue'
import router from './router'
import wvcom from 'wvcom/mongo.js'
import VueResource from "vue-resource"
import UserJs from "./service/user.js"

Vue.use(wvcom)
Vue.use(UserJs)

Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  el: "#app",
	render: h => h(Start),
  router
})
