<template>
  <div class="top">
    <el-row :gutter="24">
      <div class="project-list" v-for="article in articleList"  :key="article.ID">
        <el-col :span="span" style="padding:0 4em 4em 0">
          <div class="grid-content bg-purple card">
            <label @click="switchPage('/story/' + article.path, article.content)">
              <div style="position:relative">
                <div class="project-wrapper">
                  <div class="project-info">
                  </div>
                  <div class="project-background" :style="'background-image: url(' + article.imgsrc + ');'"></div>
                </div>
              </div>
            </label>
          </div>
        </el-col>
      </div>
    </el-row>
   
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProjectList',
  methods: {
    switchPage: function (url, content) {
      if (content !== '') {
        this.$router.push(url)
      } else {
        this.$notify({
          title: 'Sorry!',
          message: this.$t('message.workingOn'),
          type: 'info',
          offset: 20
        })
      }
    },
    isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  data () {
    return {
      span: 0,
      projects: [
        {
          id: 1,
          imgURL: 'https://storage.fredliang.cn/web/2019-01-19-%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%9B%BE.jpg',
          projectPath: '/story/hackday',
          url: ''
        },
        {
          id: 2,
          imgURL: 'https://storage.fredliang.cn/web/2019-01-23-UniqueHackdayConsole-1.jpg',
          url: ''
        },
        {
          id: 3,
          imgURL: 'https://storage.fredliang.cn/web/2019-01-27-UnionSQL.jpg',
          url: '/story/unionsql'
        }
      ].reverse()
    }
  },
  mounted () {
    this.$store.dispatch('getArticleList')
    if (this.isMobile()) {
      this.span = 24
    } else {
      this.span = 8
    }
  },
  computed: mapState([
    'articleList'
  ])
}
</script>
<style>
@media screen and (min-width:221px) and (max-width:799px){
  .el-row {
    transform: translateX(12px)
  }

  .el-col {
    padding: 0px 2em 3em 0px  !important;
  }
}

.card {
  box-shadow: 0px 30px 60px rgba(0,0,0,0.14);
  transition-duration: 0.6s;
}

.card:hover {
  transform: scale(0.994);
  box-shadow: 0px 2px 10px rgba(0,0,0,0.14);
}

.project-info {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition-duration: 0.4s;
  position: absolute;
}

.project-info:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

/* .project-wrapper:hover > .project-background {
  transform: scale3d(1.2, 1.2, 1);
} */

.project-background {
  padding: calc(500%/18);
  background-size: cover;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

img {
  width: 100%;
  display: block;
}
</style>