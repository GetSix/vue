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
  store,  //相当于stroe:stroe ,注册后，子组件使用this.$store访问
  render: h => h(App)
}).$mount('#app')
