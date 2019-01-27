<template>
  <div class="top">
    <el-row :gutter="20">
      <div class="project-list" v-for="project in projects" :key="project.id">
        <el-col :span="8" style="padding:0 4em 4em 0">
          <div class="grid-content bg-purple">
            <div class="card">
              <div style="position:relative">
                <div class="project-wrapper">
                  <div class="project-info">
                  </div>
                  <div class="project-background" :style="'background-image: url(' + project.imgURL + ');'"></div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
   
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      projects: [
        {
          id: 1,
          imgURL: 'https://storage.fredliang.cn/web/2019-01-19-%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%9B%BE.jpg',
          projectPath: '/story/hackday'
        },
        {
          id: 2,
          imgURL: 'https://storage.fredliang.cn/web/2019-01-23-UniqueHackdayConsole-1.jpg'
        }
      ]
    }
  }
}
</script>
<style>
.card {
  box-shadow: 0px 2px 36px #c7c7c7;
}

.card:hover {
  box-shadow: 0px 2px 10px #c7c7c7;
  transition-duration: 0.6s;
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