<template>
  <div :class="'content-block'  + ' bg-' + backgroundColor">
    <h2>{{ title }}</h2>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentBlock',
  props: ['title', 'content', 'backgroundColor']
}
</script>

<style>
.content-block {
  padding: 2rem 14rem 3rem 14rem;
  min-height: 8em;
  text-align: left;
}

.bg-grey {
  background-color: #f7f7f7;
}

.bg-white {
  background-color: white;
}

.content-block > h2 {
  font-weight: 900;
  color: #a9a9a9;
}

.content-block > div > p {
  color: #3c3c3c;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: 0.06rem;
  margin: 0;
}

.content-block > div > a {
  transition-duration: 0.2s;
  color: #3c3c3c;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: underline;
  line-height: 1.4rem;
  letter-spacing: 0.06rem;
  margin: 0;
}

.content-block > div > a:hover {
  color: black;
}
</style>
