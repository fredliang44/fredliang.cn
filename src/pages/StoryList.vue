<template>
  <div>
    <div class="story-header">
      <h1>UnionSQL</h1>
    </div>
    <div v-for="block in $t('story.list[2].block')" :key="block.id">
      <Banner v-if="block.type === 'banner'" :imgSrc="block.imgSrc"/>
      <ContentBlock  v-if="block.type === 'content'" :title="block.title" :content="block.content"  :backgroundColor="block.backgroundColor"/>
    </div>
   
  </div>
</template>

<script>

import Banner from '@/components/story/Banner.vue'
import ContentBlock from '@/components/story/ContentBlock.vue'
export default {
  name: 'StoryList',
  components: {
    Banner,
    ContentBlock
  }
}
</script>

<style>
@media screen and (min-width:221px) and (max-width:799px){
  .story-header {
    margin: 0 2em 0 2em;
  }
}

@media screen and (min-width:799px){
  .story-header {
    margin: 0 4em 0 4em;
  }
}
</style>

