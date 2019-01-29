<template>
    <div class="top" :class="this.$i18n.locale" >
        <h1>{{ $t("about.title") }}</h1>
    </div>
</template>

<script>
export default {
  name: 'PersonalStatement'
}
</script>

<style>
h1, ul {
  text-align: left;
}
h1 {
  color: #353432;
  margin: 0;
}
</style>
