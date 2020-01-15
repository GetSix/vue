import Vue from 'vue'

import VueI18n from 'vue-i18n'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueI18n) // 通过插件的形式挂载

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
