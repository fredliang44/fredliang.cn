<template>
    <div class="top">
      <h1 :class="this.$i18n.locale" style="height: 1.5em;">{{ $t("photo.title") }}</h1>
      <div v-html="$t('photo.description')" class="paragraph" :class="this.$i18n.locale">
      </div>

      <div  v-lazy-container="{ selector: 'img' }" id="photo-wrapper">
        <div  v-for="item in sortedPhotoList" :key="item.id" class="photo-block">
          <div class="photo-info">
            <div class="location">
              <h2>{{ item.location }}</h2>
            </div>
            <div class="time">
              <p>{{ item.time }}</p>
            </div>
          </div>
          <!-- <img style="width: 100%" :data-src="item.imgUrl + '?x-oss-process=image/resize,h_1080'" :data-loading="item.imgUrl + '?x-oss-process=image/resize,h_200'">   -->
          <v-lazy-image style="width: 100%" :src-placeholder="item.url + '?x-oss-process=image/resize,w_256'" :src="item.url + '?x-oss-process=image/resize,h_1080'"  :srcset="item.url + '?x-oss-process=image/resize,w_256 256w,'
           + item.url + '?x-oss-process=image/resize,w_512 512w,'
           + item.url + '?x-oss-process=image/resize,w_1024 1024w,'
           + item.url + '?x-oss-process=image/resize,w_2048 2048w,'
           + item.url + '?x-oss-process=image/resize,w_3072 3072w'"/>
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
      ]
    }
  },
  mounted: function () {
    this.$http.get('https://open.fredliang.cn/blog/photo')
      .then(response => (this.photoList = response.data.data.reverse()))
      .catch(error => {
        console.log(error.response)
      })
  },
  computed: {
    sortedPhotoList: function () {
      return this.photoList.map(x => {
        x.id = this.photoList.length - x.id
        return x
      })
    }
  }
}
</script>

<style>
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
h1, ul {
  text-align: left;
}
h1 {
  color: #353432;
  margin: 0;
  font-size: 4em;
}
</style>
