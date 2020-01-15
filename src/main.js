// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import Axios from 'axios'
import 'mint-ui/lib/style.css';
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// Vue.use(iView)

Vue.use(Mint);
Axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
