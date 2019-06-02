// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import api from './api/function.js'
import http from './utils/http.js'
import './styles/index.scss'
import './mock/mock.js'
import './icons'

Vue.use(ElementUI);
Vue.use(axios)
Vue.prototype.$api = api
Vue.prototype.$http = http
Vue.prototype.$ajax = axios
Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
