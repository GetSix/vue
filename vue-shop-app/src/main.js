import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,  //相当于stroe:stroe ,注册后，子组件使用this.$store访问
  render: h => h(App)
}).$mount('#app')
