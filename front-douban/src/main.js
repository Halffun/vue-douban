import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import 'amfe-flexible'
import util from './assets/js/util'
import { Lazyload } from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css'

Vue.use(Vant).use(ElementUI)

Vue.use(Lazyload, {
  lazyComponent: true,
});

Vue.prototype.$http = axios
Vue.prototype.$util = util

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
