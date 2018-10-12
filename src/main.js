import Vue from 'vue'
import Index from '@/index.vue'
import router from '@/router'
import VueI18n from 'vue-i18n'
import '@/registerServiceWorker'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import VueAnime from 'vue-animejs'
import { VLazyImagePlugin } from 'v-lazy-image'
import './registerServiceWorker'

Vue.use(VLazyImagePlugin)
Vue.use(VueAnime)
Vue.use(VueLazyload, {
  filter: {
    progressive (listener, options) {
      const isCDN = /storage.fredliang.cn/
      if (isCDN.test(listener.src)) {
        listener.el.setAttribute('lazy-progressive', 'true')
        listener.loading = listener.src + '?x-oss-process=image/resize,h_200'
      }
    }
  }
})
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
  render: h => h(Index),
  router
}).$mount('#app')
