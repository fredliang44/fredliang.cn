<template>
  <div class="footer">
    <div id="context">
      <p>
        <a
          href="//www.yuque.com/fredliang/blog/artboards/37891"
          target="_blank"
        >Design</a> & <a
          href="//github.com/fredliang44/fredliang.cn"
          target="_blank"
        >Code</a> With ❤️ By Fred Liang
      </p>
      <p class="zh">
        京ICP备16033945号-2
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>


<style scoped>
@media screen and (min-width:221px) and (max-width:799px){
  .footer {
    height: 6rem;
  }

  #context {
    height: 3em;
  }
}

@media screen and (min-width:799px){
  .footer {
    height: 8em;
  }

  #context {
    height: 4em;
  }
}


a {
  font-weight: 400;
  text-decoration: underline;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
p {
  margin: 0;
}
</style>
