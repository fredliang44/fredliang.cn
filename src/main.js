import Vue from 'vue'
import Index from './index.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import VueProgressiveImage from 'vue-progressive-image'
import './registerServiceWorker'

Vue.use(VueProgressiveImage)
Vue.use(VueI18n)

Vue.config.productionTip = false

const DEFAULT_LANG = 'en'

const locales = {
  zh: require('./locales/zh.json'),
  en: require('./locales/en.json')
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
})

new Vue({
  i18n,
  render: h => h(Index),
  router
}).$mount('#app')
