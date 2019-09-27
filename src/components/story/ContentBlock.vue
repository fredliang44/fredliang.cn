<template>
  <div :class="'content-block' + ' bg-' + backgroundColor">
    <h2>{{ title }}</h2>
    <div v-html="content" />
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
@media screen and (min-width: 221px) and (max-width: 799px) {
  .content-block {
    padding: 2rem 2rem 3rem 2rem;
  }
}

@media screen and (min-width: 799px) {
  .content-block {
    padding: 2rem 14rem 3rem 14rem;
  }
}
.content-block {
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
  font-size: 2rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.5);
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
