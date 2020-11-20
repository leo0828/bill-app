import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./lib/element-ui";
import "./lib/dayjs";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
