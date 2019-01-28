<template>
  <div>
    <div class="top">
      <h1>UnionSQL</h1>
    </div>
    <Description/>
  </div>
</template>

<script>
import Description from '@/components/story/Description.vue'
export default {
  name: 'StoryList',
  components: {
    Description
  }
}
</script>

<style>
.top {
  padding: 0 4em 0em 4em;
}
</style>

