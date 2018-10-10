import Vue from 'vue'
import Index from './index.vue'
import router from './router';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
  router
}).$mount('#app')