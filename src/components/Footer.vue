<template>
  <div class="footer">
    <div id="context">
        <p>Design & Code With ❤️ By Fred Liang</p>
        <p>京ICP备16033945号-2</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',

}
</script>


<style scoped>
#context {
  height: 4em;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 8em;
}
p {
  margin: 0;
}
</style>
