import Vue from 'vue'
import App from './App.vue'
import router from './router'
import less from 'less'
import ViewUI  from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(less)
Vue.use(ViewUI )

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
