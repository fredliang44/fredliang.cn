<template>
  <div id="app">
    <div id="wrapper">
      <div
        class="header"
        :class="this.$i18n.locale"
      >
        <ul>
          <li>
            <router-link
              to="/"
              active-class="active"
              exact
            >
              {{ $t("navigation[0]") }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/photo"
              active-class="active"
            >
              {{ $t("navigation[1]") }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/story"
              active-class="active"
            >
              {{ $t("navigation[2]") }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              active-class="active"
            >
              {{ $t("navigation[3]") }}
            </router-link>
          </li>
          <li>
            <a
              href="https://blog.fredliang.cn"
              target="_blank"
              rel="noopener"
            >
              {{ $t("navigation[4]") }}
              <svg
                width="12px"
                height="12px"
                viewBox="0 0 12 12"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    class="external-link"
                    transform="translate(-623.000000, -465.000000)"
                    fill="#919191"
                  >
                    <g
                      class="link-external"
                      transform="translate(621.000000, 463.000000)"
                    >
                      <rect
                        opacity="0"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      />
                      <path
                        d="M12,12 L4,12 L4,4 L8.66666667,4 L8.66666667,2.66666667 L3.33333333,2.66666667 C2.9651435,2.66666668 2.66666668,2.9651435 2.66666667,3.33333333 L2.66666667,12.6666667 C2.66666668,13.0348565 2.9651435,13.3333333 3.33333333,13.3333333 L12.6666667,13.3333333 C13.0348565,13.3333333 13.3333333,13.0348565 13.3333333,12.6666667 L13.3333333,7.33333333 L12,7.33333333 L12,12 Z"
                      />
                      <polygon
                        points="11.6433333 3.414 7.52866667 7.52866667 8.47133333 8.47133333 12.586 4.35666667 13.9993333 5.77066667 14 2 10.2286667 2"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <div id="switch-wrapper">
            <button
              id="lang-switch"
              @click="changeLocale"
            >
              <p>EN / 中文</p>
            </button>
          </div>
        </ul>
      </div>
      <transition name="slide">
        <router-view id="router" />
      </transition>
    </div>
    <Footer />
    <ServiceWorker :key="this.$route.path" />
  </div>
</template>

<script>
import Home from "@/pages/Home.vue";
import Footer from "@/components/Footer.vue";
import ServiceWorker from "@/components/ServiceWorker.vue";

export default {
  name: "App",
  components: {
    Footer,
    ServiceWorker
  },
  data() {
    return {
      locale: "en"
    };
  },
  created: function() {},
  mounted: function() {
    if (this.getCookie("lang") !== undefined) {
      this.$i18n.locale = this.getCookie("lang");
    }
  },
  methods: {
    changeLocale: function() {
      this.$i18n.locale === "zh"
        ? (this.$i18n.locale = "en")
        : (this.$i18n.locale = "zh");
      this.setCookie("lang", this.$i18n.locale, 30);
    },
    setCookie: function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    getCookie: function(cookieName) {
      var allcookies = document.cookie;
      var cookiePos = allcookies.indexOf(cookieName);
      if (cookiePos !== -1) {
        cookiePos += cookieName.length + 1;
        var cookieEnd = allcookies.indexOf(";", cookiePos);
        if (cookieEnd === -1) {
          cookieEnd = allcookies.length;
        }
        var value = unescape(allcookies.substring(cookiePos, cookieEnd));
      }
      return value;
    }
  }
};
</script>

<style>
@font-face {
  font-family: "FZBWKSJW";
  src: url("./assets/font/FZBWKSJW.eot"); /* IE9 */
  src: url("./assets/font/FZBWKSJW.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/font/FZBWKSJW.woff") format("woff"),
    /* chrome、firefox */ url("./assets/font/FZBWKSJW.ttf") format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
      url("./assets/font/FZBWKSJW.svg#FZBWKSJW") format("svg"); /* iOS 4.1- */
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Product Sans";
  src: url("./assets/font/ProductSans-Bold.woff2");
  src: url("./assets/font/ProductSans-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/font/ProductSans-Bold.woff2") format("woff2"),
    url("./assets/font/ProductSans-Bold.woff") format("woff"),
    url("./assets/font/ProductSans-Bold.ttf") format("truetype"),
    url("./assets/font/ProductSans-Bold.svg#ProductSans-Bold") format("svg");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Product Sans";
  src: url("./assets/font/ProductSans-Regular.woff2");
  src: local("Product Sans") url("./assets/font/ProductSans-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/font/ProductSans-Regular.woff2") format("woff2"),
    url("./assets/font/ProductSans-Regular.woff") format("woff"),
    url("./assets/font/ProductSans-Regular.ttf") format("truetype"),
    url("./assets/font/ProductSans-Regular.svg#ProductSans-Regular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}

@media screen and (min-width: 221px) and (max-width: 799px) {
  .header {
    padding: 2em 0em 0 2.4em;
    font-size: 0.7em;
  }

  .header > ul > li:last-of-type {
    width: 4em;
  }

  #lang-switch > p {
    margin: 0 8px;
    font-size: 0.7em;
  }

  .top {
    padding: 0 2em 2em 2em;
  }

  ul {
    font-size: 1.26rem;
  }

  button {
    display: none;
    padding: 3px 0;
  }

  #router {
    padding-top: 2em;
  }
}

@media screen and (min-width: 799px) {
  .header {
    padding: 4em 5em 0 5em;
    font-size: 0.84em;
  }

  .header > ul > li {
    width: 4em;
  }

  #lang-switch > p {
    margin: 0 12px;
    font-size: 15px;
  }

  .top {
    padding: 0 4em 2em 4em;
  }

  ul {
    font-size: 2em;
  }

  button {
    padding: 6px 0;
  }

  #router {
    padding-top: 4em;
  }
}

::selection {
  background: rgb(0, 0, 0, 0.1);
}

.header > ul > li > a:hover {
  color: #353432;
  transition: all 0.5s;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353432;
}
.en {
  font-family: "Product Sans", "Roboto", Arial, Helvetica, sans-serif;
}
.zh {
  font-family: "FZBWKSJW", "Roboto", Arial, Helvetica, sans-serif;
}

#lang-switch {
  transform: translateY(-4px);
}

#switch-wrapper {
  float: right;
}
.header {
  height: 2.4em;
  text-align: left;
}

.active {
  color: #353432;
  padding-bottom: 3px;
  border-bottom: 2px solid #000;
}
#wrapper {
  box-shadow: 0 10px 10px -10px #ccc;
}
button:active {
  background-color: #353432 !important;
  transition: all 0s;
}
button:hover {
  background-color: #918c85;
  color: white;
}
button {
  border: 1px solid #353432;
  background-color: white;
  outline: none;
  transition: all 0.6s, border 0s;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  line-height: 100%;
  margin: 0 10px;
  transition: all 0.5s, transform 2s;
}
a {
  color: #919191;
  text-decoration: none;
  transition: color 1s;
}
body {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  top: 0;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family: "Product Sans", Arial, Helvetica, sans-serif !important;
}
</style>
