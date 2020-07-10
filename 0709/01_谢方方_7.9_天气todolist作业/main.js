import Vue from 'vue'

import axios from 'axios'
Vue.prototype.$axios = axios

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './components/Day04/router.js'
 
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

import App from './App.vue'
import feather from 'vue-icon'
Vue.use(feather, 'v-icon')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
