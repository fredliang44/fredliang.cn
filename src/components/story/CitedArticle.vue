<template>
  <div class="cited-article">
    <h2>公开资料参考</h2>
    <a href="https://mp.weixin.qq.com/s/JPK_wHHaI6KPbw3hP34H5g">小米大数据：借助Apache Kylin打造高效、易用的一站式OLAP解决方案</a>
    <br>
    <a href="https://kyligence.io/zh/2018/12/03/xiaomi-use-apache-kylin-to-build-an-efficient-and-easy-to-use-one-step-olap/">【用户案例】小米大数据：借助Apache Kylin打造高效、易用的一站式OLAP解决方案</a>
  </div>
</template>

<script>
export default {
  name: 'CitedArticle'
}
</script>

<style>
.cited-article {
  padding: 2rem 14rem 3rem 14rem;
  min-height: 8em;
  text-align: left;
  
}

.cited-article > h2 {
  font-weight: 500;
  color: #a9a9a9;
}

.cited-article > a {
  transition-duration: 0s;
  color: #3c3c3c;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: underline;
  line-height: 1.4rem;
  letter-spacing: 0.06rem;
  margin: 0;
}

.cited-article > a:hover {
  color: black;
}
</style>
