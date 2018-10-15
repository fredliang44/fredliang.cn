<template>
  <div id="app">
    <div id="wrapper">
      <div class="header">
        <ul :class="this.$i18n.locale">
          <li><router-link to="/" active-class="active" exact>{{ $t("navigation[0]") }}</router-link></li>
          <li><router-link to="/photo" active-class="active">{{ $t("navigation[1]") }}</router-link></li>
          <li><router-link to="/about" active-class="active">{{ $t("navigation[2]") }}</router-link></li>
          <li>
            <a href="https://blog.fredliang.cn" target="_blank" rel="noopener">
              {{ $t("navigation[3]") }}
              <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="external-link" transform="translate(-623.000000, -465.000000)" fill="#919191">
                          <g id="link-external" transform="translate(621.000000, 463.000000)">
                              <rect id="Rectangle" opacity="0" x="0" y="0" width="16" height="16"></rect>
                              <path d="M12,12 L4,12 L4,4 L8.66666667,4 L8.66666667,2.66666667 L3.33333333,2.66666667 C2.9651435,2.66666668 2.66666668,2.9651435 2.66666667,3.33333333 L2.66666667,12.6666667 C2.66666668,13.0348565 2.9651435,13.3333333 3.33333333,13.3333333 L12.6666667,13.3333333 C13.0348565,13.3333333 13.3333333,13.0348565 13.3333333,12.6666667 L13.3333333,7.33333333 L12,7.33333333 L12,12 Z" id="Path"></path>
                              <polygon id="Path" points="11.6433333 3.414 7.52866667 7.52866667 8.47133333 8.47133333 12.586 4.35666667 13.9993333 5.77066667 14 2 10.2286667 2"></polygon>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
          </li>
          <div id="switch-wrapper">
            <button v-on:click="changeLocale" id="lang-switch">
              <p>EN / 中文</p>
            </button>
          </div>
        </ul>
      </div>
      <transition name="slide">
        <router-view id="router" />
      </transition>
    </div>
    <Footer/>
    
  </div>
</template>

<script>

import Home from '@/pages/Home.vue'
import Footer from '@/components/Footer.vue'
import { register } from 'register-service-worker'

function subscribe (serviceWorkerReg) {
  console.log('subscribe(registration)')
  Notification.requestPermission().then(function (result) {
    console.log(result)

    if (result === 'denied') {
      console.log('Permission wasn\'t granted. Allow a retry.')
      return
    }
    if (result === 'default') {
      console.log('The permission request was dismissed.')
    }
    serviceWorkerReg.pushManager.subscribe({ // 2. 订阅
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array('BH4TZegaPQu8VK-tVZ3K-aFWVACY00zJd0tdCs5x9Ps_8VSYp9LuTdxwEVBECc1yfl5R_C8r1aMwObLj0AHiSRw')
    })
      .then(function (subscription) {
      // 3. 发送推送订阅对象到服务器，具体实现中发送请求到后端api
        console.log('then sendSubscriptionToBackEnd (subscription)')
        sendSubscriptionToBackEnd(subscription)
      })
      .catch(function (error) {
        if (Notification.permission === 'denied') {
          console.log('用户拒绝了订阅请求')
        // 用户拒绝了订阅请求
        }
        console.log('sth goes wrong', error)
      })
  })
}

function urlBase64ToUint8Array (base64String) {
  console.log('urlBase64ToUint8Array (base64String)')
  var padding = '='.repeat((4 - base64String.length % 4) % 4)
  var base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')
  var rawData = window.atob(base64)
  var outputArray = new Uint8Array(rawData.length)
  for (var i = 0, max = rawData.length; i < max; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

function sendSubscriptionToBackEnd (subscription) {
  console.log('sendSubscriptionToBackEnd (subscription)')
  return fetch('https://open.fredliang.cn/blog/push/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subscription)
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Bad status code from server.')
      }
      return response.json()
    })
    .then(function (responseData) {
      if (!(responseData.data && responseData.data.success)) {
        throw new Error('Bad response from server.')
      }
    })
}

export default {
  name: 'app',
  methods: {
    changeLocale: function () {
      this.$i18n.locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      this.setCookie('lang', this.$i18n.locale, 30)
    },
    setCookie: function (cname, cvalue, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toUTCString()
      document.cookie = cname + '=' + cvalue + '; ' + expires
    },
    getCookie: function (cookieName) {
      var allcookies = document.cookie
      var cookiePos = allcookies.indexOf(cookieName)
      if (cookiePos !== -1) {
        cookiePos += cookieName.length + 1
        var cookieEnd = allcookies.indexOf(';', cookiePos)
        if (cookieEnd === -1) {
          cookieEnd = allcookies.length
        }
        var value = unescape(allcookies.substring(cookiePos, cookieEnd))
      }
      return value
    }
  },
  data () {
    return {
      locale: 'en'
    }
  },
  components: {
    Home,
    Footer
  },
  created: function () {
  },
  mounted: function () {
    if (this.getCookie('lang') !== undefined) {
      this.$i18n.locale = this.getCookie('lang')
    }
    if (process.env.NODE_ENV === 'production') {
      register(`${process.env.BASE_URL}service-worker.js`, {
        ready () {
          console.log(
            'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
          )
        },
        registered (registration) {
          if (registration.pushManager.getSubscription()) {
            console.log(registration.pushManager.getSubscription())
          } else {
            subscribe(registration)
          }
          console.log('Service worker has been registered.')
        },
        cached () {
          console.log('Content has been cached for offline use.')
        },
        updated (registration) {
          console.log('New content is available; please refresh.')
          window.location.reload()
        },
        offline () {
          console.log('No internet connection found. App is running in offline mode.')
        },
        error (error) {
          console.error('Error during service worker registration:', error)
        }
      })
    }
  }
}
</script>

<style>

@font-face {
    font-family: "FZBWKSJW";
    src: url("./assets/font/FZBWKSJW.eot"); /* IE9 */
    src: url("./assets/font/FZBWKSJW.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    
    url("./assets/font/FZBWKSJW.woff") format("woff"), /* chrome、firefox */
    url("./assets/font/FZBWKSJW.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
    
    url("./assets/font/FZBWKSJW.svg#FZBWKSJW") format("svg"); /* iOS 4.1- */
    font-style: normal;
    font-weight: normal;
}

.header > ul > li > a:hover {
  color: #353432;
  transition: all 0.5s,
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353432;
}
.en {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.zh {
  font-family: 'FZBWKSJW','Avenir', Helvetica, Arial, sans-serif;
}

#lang-switch {
  transform: translateY(-4px);
}
#lang-switch > p{
  margin: 0 12px;
  font-size: 15px;
}
#switch-wrapper {
  float: right;
}
.header {
  height: 2.4em;
  padding: 4em 5em 0 5em;
  font-size: 0.84em;
  text-align: left;
}
.header > ul > li {
  width: 4em;
}
.active {
  color: #353432;
  padding-bottom:3px; border-bottom:2px solid #000;
}
#wrapper {
  box-shadow: 0 10px 10px -10px #ccc;
}
button:active  {
  background-color: #353432 !important;
  transition: all 0s;
}
button:hover {
  background-color: #918c85;
  color: white;
}
button {
  padding: 0;
  border: 1px solid #353432;
  padding: 6px 0;
  background-color: white;
  outline:none;
  transition: all 0.6s, border 0s;
}
ul {
  font-size: 2em;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  line-height: 100%;
  margin: 0 10px;
  transition: all .5s, transform 2s;
}
a {
  color: #919191;
  text-decoration: none;
  transition: color 1s;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  top: 0;
  margin: 0;
}
</style>
