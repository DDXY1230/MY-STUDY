import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import Router from 'vue-router'
import RouterList from './RouterList'
Vue.use(Router)


const router = new Router(RouterList)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
