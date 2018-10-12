<template>
  <div id="app">
    <div id="wrapper">
      <div class="header">
        <ul :class="this.$i18n.locale">
          <li><router-link to="/" active-class="active" exact>{{ $t("navigation[0]") }}</router-link></li>
          <li><router-link to="/photo" active-class="active">{{ $t("navigation[1]") }}</router-link></li>
          <li><router-link to="/about" active-class="active">{{ $t("navigation[2]") }}</router-link></li>
          <li><a href="https://blog.fredliang.cn" target="_blank" rel="noopener" id="refer">{{ $t("navigation[3]") }}</a></li>
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
  mounted: function () {
    if (this.getCookie('lang') !== undefined) {
      this.$i18n.locale = this.getCookie('lang')
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

#refer:hover {
  transition: all 0.5s;
  border: 2px #353432 solid;
}

#refer {
  border: 2px #cccccc solid;
  padding: 2px 8px;
  border-radius: 3px;
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
