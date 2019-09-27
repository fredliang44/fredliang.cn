<template>
  <div>
    <div class="story-header">
      <h1>{{ articleList[articleList.findIndex(x => x.path == this.$route.path.split('/').pop())].title }}</h1>
    </div>
    <Banner
      :img-src="articleList[articleList.findIndex(x => x.path == this.$route.path.split('/').pop())].bannersrc"
    />
    <MarkdownRender
      :content="articleList[articleList.findIndex(x => x.path == this.$route.path.split('/').pop())].content"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Banner from "@/components/story/Banner.vue";
import MarkdownRender from "@/components/story/MarkdownRender.vue";
export default {
  name: "StoryContent",
  components: {
    Banner,
    MarkdownRender
  },
  data() {
    return {};
  },
  Created() {
    this.$store.dispatch("getArticleList");
  },
  computed: mapState(["articleList"])
};
</script>

<style>
@media screen and (min-width: 221px) and (max-width: 799px) {
  .story-header {
    margin: 0 2em 0 2em;
  }
}

@media screen and (min-width: 799px) {
  .story-header {
    margin: 0 4em 0 4em;
  }
}

.banner {
  width: 100%;
}
</style>

