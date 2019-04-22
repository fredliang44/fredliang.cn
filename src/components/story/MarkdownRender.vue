<template>
  <vue-markdown  class="markdown-body">{{ content }}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import 'github-markdown-css'

export default {
  name: 'ContentBlock',
  props: ['title', 'content', 'backgroundColor'],
  components: {
    VueMarkdown
  }
}
</script>

<style>
@media screen and (min-width:221px) and (max-width:799px){
  .markdown-body {
    text-align: left;
    padding: 5rem 2rem 6rem 2rem;
    font-weight: 400;
  }
}

@media screen and (min-width:799px){
  .markdown-body {
    text-align: left;
    padding: 5rem 20rem 6rem 20rem;
    font-weight: 400;
  }

  .markdown-body h1:before {
    position: absolute;
    transform: translate(-130%);
    display: block;
    content: '#';
    color: rgba(0, 0, 0, 0.2);
  }

  .markdown-body h2:before, .markdown-body h3:before, .markdown-body h4:before, .markdown-body h5:before, .markdown-body h6:before {
    position: absolute;
    transform: translate(-130%);
    display: block;
    content: '##';
    color: rgba(0, 0, 0, 0.2);
  }
}



.markdown-body h1 {
  color: rgba(0, 0, 0, 0.75);
  margin-top: 4rem;
}

.markdown-body h2, h3, h4, h5 {
  color: rgba(0, 0, 0, 0.67)
}

.markdown-body ol {
  color: rgba(0, 0, 0, 0.2);
  border-left: 4px solid;
  padding-left: 1.4em;
}

.markdown-body li {
  font-size: 16px;
}
/* @media screen and (min-width:221px) and (max-width:799px){
  .content-block {
    padding: 2rem 2rem 3rem 2rem;
  }
}

@media screen and (min-width:799px){
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
} */
</style>
