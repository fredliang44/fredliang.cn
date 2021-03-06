import Vue from 'vue'
import store from './store'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import VueAnime from 'vue-animejs'

import Index from '@/index.vue'
import router from '@/router'
import './plugins/element.js'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-140497401-2',
  router
})

Vue.use(VueAnime)

Vue.use(VueI18n)

Vue.config.productionTip = false

Vue.prototype.$http = axios

const DEFAULT_LANG = 'en'

const locales = {
  zh: require('@/locales/zh.json'),
  en: require('@/locales/en.json')
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
})

new Vue({
  i18n,
  store,
  render: h => h(Index),
  router
}).$mount('#app')
