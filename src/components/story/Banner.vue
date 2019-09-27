<template>
  <div class="banner">
    <img :src="imgSrc">
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
export default {
  name: "Banner",
  props: {
    imgSrc: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
@media screen and (min-width: 221px) and (max-width: 799px) {
  .banner {
    margin-top: 2rem;
  }
}

@media screen and (min-width: 799px) {
  .banner {
    margin-top: 4rem;
  }
}
</style>
