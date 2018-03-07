// import Vue from 'vue'
import Vue from 'vue'
import Start from './Start.vue'
import router from './router'
import wvcom from 'wvcom/mongo.js'
import VueResource from "vue-resource"

Vue.use(wvcom)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(Start),
  router,
  created: function() {
   var self = this;
   this.users = this.get('user', function(){
   	console.log('this.users');
   	//console.log(this.users); // this don't have the correct array
   	console.log('self.users');
   	console.log(self.users); // this show correct as this is not working here anymore
   });
  }
})
