<template>
    <div class="top">
      <h1>Photo</h1>
      <div class="paragraph">
        <p>To see the world, things dangerous to come to,</p>
        <p>to see behind walls,  to draw closer,</p>
        <p>to find each other,  and to feel.</p>
        <p>That is the purpose of life.</p>
      </div>

      <div class="photo-block">
        <div class="photo-info">
          <div class="location">
            <h2>Germany</h2>
          </div>
          <div class="time">
            <p>2016</p>
          </div>
        </div>
        <progressive-img 
          src="https://wordpresscn.oss-cn-beijing.aliyuncs.com/2017/IMG_1871.jpg?x-oss-process=image/resize,h_1080" 
          placeholder="https://wordpresscn.oss-cn-beijing.aliyuncs.com/2017/IMG_1871.jpg?x-oss-process=image/resize,h_200"
        />
      </div>
    </div>
</template>

<script>
export default {
    name: 'PhotoList',
}
</script>

<style>
.location {
  padding-top:3px; border-top:2px solid #000
}
h2 {
  font-size: 2em;
}
.time > p {
  font-size: 1.6em;
}
.paragraph {
  text-align: left;
  font-size: 1.2em;
  margin-bottom: 4em;
}
.top {
  padding: 2em 4em 0em 4em;
}
h1, ul {
  text-align: left;
}
h1 {
  color: #353432;
  margin: 0;
  font-size: 4em;
}
</style>
