import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './utils/contract/getContractInfo'
import './assets/styles/style-dark.css'
import 'tailwindcss/tailwind.css'

var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
