<template>
  <div>
    <div class="story-header">
      <h1>UnionSQL</h1>
    </div>
    <div v-for="block in $t('story.list[2].block')" :key="block.id">
      <Banner v-if="block.type === 'banner'" :url="block.url"/>
      <ContentBlock  v-if="block.type === 'content'" :title="block.title" :content="block.content"  :backgroundColor="block.backgroundColor"/>
    </div>
   
  </div>
</template>

<script>

import Banner from '@/components/story/Banner.vue'
import ContentBlock from '@/components/story/ContentBlock.vue'
import CitedArticle from '@/components/story/CitedArticle.vue'
export default {
  name: 'StoryList',
  components: {
    Banner,
    ContentBlock,
    CitedArticle
  },
  mounted () {
    console.log(this.$t('story'))
  }
}
</script>

<style>
.story-header {
  margin: 0 4em 0 4em;
}
</style>

