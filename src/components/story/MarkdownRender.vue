<template>
  <vue-markdown class="markdown-body">
    {{ content }}
  </vue-markdown>
</template>

<script>
import "@/libs/prism.js";
import VueMarkdown from "vue-markdown";
import "github-markdown-css";

export default {
  name: "ContentBlock",
  components: {
    VueMarkdown
  },
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
  },
  created() {
    this.$store.dispatch("getArticleList");
  }
};
</script>

<style scpoed>
@import "../../libs/prism.css";

@media screen and (min-width: 221px) and (max-width: 799px) {
  .markdown-body {
    text-align: left;
    padding: 3rem 2rem 3rem 2rem;
    font-weight: 400;
  }
}

@media screen and (min-width: 799px) {
  .markdown-body {
    text-align: left;
    padding: 5rem 20% 6rem 20%;
    font-weight: 400;
  }

  .markdown-body h1:before {
    position: absolute;
    transform: translate(-130%);
    display: block;
    content: "#";
    color: rgba(0, 0, 0, 0.2);
  }

  .markdown-body h2:before,
  .markdown-body h3:before,
  .markdown-body h4:before,
  .markdown-body h5:before,
  .markdown-body h6:before {
    position: absolute;
    transform: translate(-130%);
    display: block;
    content: "##";
    color: rgba(0, 0, 0, 0.2);
  }
}

.markdown-body h1 {
  color: rgba(0, 0, 0, 0.75);
  margin-top: 4rem;
}

.markdown-body h2,
h3,
h4,
h5 {
  color: rgba(0, 0, 0, 0.67);
}

.markdown-body ol {
  padding-left: 1.8rem;
}

.markdown-body li {
  list-style-type: decimal;
  display: list-item;
  color: #24292e;
  font-weight: 400;
  font-size: 16px;
}

.markdown-body a {
  color: rgba(0, 0, 0, 0.58);
  text-decoration: underline;
  font-weight: 500;
}

.markdown-body {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial,
    "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei",
    "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",
    "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC",
    "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  letter-spacing: 1px;
}
.markdown-body code {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
