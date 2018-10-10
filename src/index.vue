<template>
  <div id="app" >
    <div class="header">
      <ul>
        <li><router-link to="/" active-class="active" exact>Home</router-link></li>
        <li><a href="https://blog.fredliang.cn" target="_blank" rel="noopener">Blog</a></li>
        <li><router-link to="/photo" active-class="active">Photo</router-link></li>
        <li><router-link to="/about" active-class="active">About</router-link></li>
        <div id="switch-wrapper">
          <li>
            <button id="lang-switch">
              <p>EN / 中文</p>
            </button>
          </li>
        </div>
      </ul>
    </div>
    <transition>
      <router-view id="router" />
    </transition>
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'app',
  data () {
    return { langs: ['en', 'zh'] }
  },
  components: {
    Home,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353432;
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
  margin: 5em 5em 0 5em;
  font-size: 0.84em;
  text-align: left;
}
.active {
  color: #353432;
  padding-bottom:3px; border-bottom:2px solid #000
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
  margin: 0;
}
</style>
