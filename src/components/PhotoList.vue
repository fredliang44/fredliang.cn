<template>
    <div class="top">
      <h1 :class="this.$i18n.locale" style="height: 1.5em;">{{ $t("photo.title") }}</h1>
      <div v-html="$t('photo.description')" class="paragraph" :class="this.$i18n.locale">
      </div>

      <div id="photo-wrapper">
        <div  v-for="item in photoList" :key="item.id" class="photo-block">
          <div class="photo-info">
            <div class="location">
              <h2>{{ item.location }}</h2>
            </div>
            <div class="time">
              <p>{{ item.time }}</p>
            </div>
          </div>
          <picture>
             <!-- <source
                type="image/webp"
                :srcset="item.url + '?x-oss-process=image/resize,w_256/format,webp 256w,'
                  + item.url + '?x-oss-process=image/resize,w_512/format,webp 512w,'
                  + item.url + '?x-oss-process=image/resize,w_1024/format,webp 1024w,'
                  + item.url + '?x-oss-process=image/resize,w_2048/format,webp 2048w,'
                  + item.url + '?x-oss-process=image/resize,w_3072/format,webp 3072w'"
            > -->
            <v-lazy-image style="width: 100%" :src-placeholder="item.url + '?x-oss-process=image/resize,w_256/quality,Q_50/blur,r_3,s_2'" :src="item.url + '?x-oss-process=image/resize,h_1080'"  :srcset="item.url + '?x-oss-process=image/resize,w_256 256w,'
            + item.url + '?x-oss-process=image/resize,w_512/quality,Q_80 512w,'
            + item.url + '?x-oss-process=image/resize,w_1024/quality,Q_80 1024w,'
            + item.url + '?x-oss-process=image/resize,w_2048/quality,Q_80 2048w,'
            + item.url + '?x-oss-process=image/resize,w_3072/quality,Q_80 3072w'"/>
          </picture>
        </div>

        <div>
          <button :style="'opacity: ' + toTopOpacity" @click="scrollToTop" :class="{'none':notShowBackToTop, 'back-to-top': true}">
            <svg width="21px" height="24px" viewBox="0 0 21 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="index" transform="translate(-601.000000, -302.000000)" fill="#FFFFFF">
                        <g id="top" transform="translate(595.000000, 298.000000)">
                            <rect id="Rectangle" opacity="0" x="0" y="0" width="32" height="32"></rect>
                            <path d="M23.8852138,14.3547155 C23.6354632,14.6044662 23.2306176,14.6044662 22.9805472,14.3547155 L17.1125257,8.48637425 L17.1125257,27.358379 C17.1125257,27.7114197 16.8263198,27.9979454 16.4729593,27.9979454 C16.1195989,27.9979454 15.833393,27.7114197 15.833393,27.358379 L15.833393,8.48637425 L9.96505172,14.3550353 C9.84033628,14.4797507 9.67660728,14.5421085 9.51287828,14.5421085 C9.34914928,14.5421085 9.18574009,14.4797507 9.06070484,14.3550353 C8.81095419,14.1049649 8.81095419,13.7001193 9.06070484,13.4503687 L16.0207859,6.49028762 C16.1407046,6.37036894 16.3034742,6.30289469 16.4729593,6.30289469 C16.6427642,6.30289469 16.8055338,6.37036894 16.9254526,6.49028762 L23.8852138,13.4500489 C24.1349645,13.6997995 24.1349645,14.1046451 23.8852138,14.3547155 Z M26.3398696,4.69950175 C26.3398696,5.05254237 26.0536636,5.33906812 25.7003032,5.33906812 L7.24561547,5.33906812 C6.89225506,5.33906812 6.60604909,5.05254237 6.60604909,4.69950175 C6.60604909,4.34614134 6.89225503,4.05993537 7.24561547,4.05993537 L25.7003032,4.05993537 C26.0536636,4.05993538 26.3398696,4.34614131 26.3398696,4.69950175 Z" id="Shape" fill-rule="nonzero"></path>
                        </g>
                    </g>
                </g>
            </svg>
          </button>
        </div>

        <div class="switch-page">
          <button id="previous" @click="switchPage(0)" :class="this.$i18n.locale" class="switcher" :disabled="!hasPrevious">previous</button>
          <button id="next" @click="switchPage(1)" :class="this.$i18n.locale" class="switcher"  :disabled="!hasNext">next</button>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'PhotoList',
  data () {
    return {
      photoList: [
      ],
      position: 0,
      notShowBackToTop: true,
      toTopOpacity: 1,
      hasPrevious: false,
      hasNext: false
    }
  },
  methods: {
    handleScroll (e) {
      let scrollTop = document.documentElement.scrollTop
      let clientHeight = window.screen.height

      if ((scrollTop <= clientHeight * 1.5)) {
        this.toTopOpacity = scrollTop / (clientHeight * 1.5)
      } else {
      }
    },
    switchPage: function (action) {
      var currentPage = 0
      switch (this.$route.params.page) {
        case NaN:
          currentPage = 1
          break
        case undefined:
          currentPage = 1
          break
        default:
          currentPage = Number(this.$route.params.page)
      }
      switch (action) {
        case 0:
          this.scrollToTop()
          this.$router.push('/photo/' + (currentPage - 1).toString())
          break
        case 1:
          this.scrollToTop()
          this.$router.push('/photo/' + (currentPage + 1).toString())
          break
        default:
          console.log('error', action)
      }
    },
    flushPhotolist: function () {
      var url = 'https://open.fredliang.cn/blog/photo'
      if (this.$route.params.page !== undefined) {
        url += '/' + this.$route.params.page
      }
      this.$http.get(url)
        .then(response => {
          this.photoList = response.data.data.list
          this.hasPrevious = response.data.data.previous
          this.hasNext = response.data.data.next
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    scrollToTop: function () {
      var current = {
        position: document.documentElement.scrollTop
      }
      this.$anime({
        targets: current,
        position: 0,
        round: 1,
        easing: 'easeInOutQuart',
        duration: 300,
        update: function () {
          document.documentElement.scrollTop = current.position
        }
      })
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
    this.flushPhotolist()
  },
  watch: {
    '$route': function (to, from) {
      this.flushPhotolist()
    }
  }
}
</script>

<style>
.none {
  display: none;
}
.back-to-top {
  right: 10%;
  bottom: 15%;
  position: fixed;
  background-color: #353432;
  padding-top: 1em;
  width: 4em;
  height: 4em;
}
.switch-page {
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
 
}
.switcher {
  font-size: 1.2em;
  border: 2px solid #353432;
  padding: 0.5em 1em;
}

#photo-wrapper {
  padding-top:3px; border-top:2px solid #000
}
h2 {
  font-size: 2em;
}
.time > p {
  font-size: 1.6em;
}
.paragraph {
  height: 10em;
  text-align: left;
  font-size: 1.2em;
  margin-bottom: 4em;
}
.top {
  padding: 4em;
}
button:disabled {
  opacity: 0.4;
}

button:disabled:hover {
  background-color: transparent;
  color: #353432;
}
h1, ul {
  text-align: left;
}
h1 {
  color: #353432;
  margin: 0;
  font-size: 4em;
}
</style>
