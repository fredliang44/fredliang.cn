<template>
  <div>
    <div class="top">
      <h1 :class="this.$i18n.locale" style="height: 1.5em;">{{ $t("story.title") }}</h1>
    </div>
    <ProjectList/>
  </div>
</template>

<script>
import ProjectList from '@/components/story/ProjectList.vue'
export default {
  name: 'StoryBoard',
  components: {
    ProjectList
  }
}
</script>

<style>
.top {
  padding: 0 4em 4em 4em;
}
</style>

