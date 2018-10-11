<template>
    <div class="part2-wrapper">
      <div class="part2">
        <h1 id="statement-title">Who am I</h1>
        <div class="statement">
          <p>Since 2013, I started working on Video Production. Being Obsessed with 
            providing gorgeous video effects and significant thoughts to my schoolmates.</p>
          <p>During my college life, I joined <a target="_blank" rel="noopener" href="//hustunique.com">Unique Studio</a>. 
          My work has changed from Visual Design to Product Management. Dozens of technologies
           and approaches had been tried to enrich my my horizons.</p>
          <p>With my pleasure, here are some of my works:</p>

          <ul>
            <li><p><a href="//hack.hustunique.com" rel="noopener" target="_blank">Unique Hackday</a> ---- A Domestic Hackathon</p></li>
            <li><p><a href="//console.hack.hustunique.com" rel="noopener" target="_blank">Unique Hackday Console</a> ---- A Hackathon Management System</p></li>
            <li><p><a href="//fmt.hustunique.com" rel="noopener" target="_blank">Family Tree</a> ---- A Tool Present Relationships in Unique Studio</p></li>
          </ul>
          
          <p>Besides that, I have been maintaining some infrastructure for my collaborators.</p>
          <ul>
            <li><p><a href="//manager.fredliang.cn" rel="noopener" target="_blank">Rancher</a> ---- A Docker Container Manage System</p></li>
            <li><p><a href="//data.fredliang.cn" rel="noopener" target="_blank">Metabase</a> ---- A Business Intelligence System</p></li>
            <li><p><a href="//open.hustunique.com" rel="noopener" target="_blank">Open platform</a> ---- Open platform of Unique Studio</p></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'WhoAmI',

}
</script>


<style scoped>
p > a {
  text-decoration: underline;
  color: white;
}
ul, li > p {
  margin: 0;
}
.statement > p {
  color: white;
  font-size: 1.2em;
  text-align: left;
}
@media only screen and (min-width: 500px) {
  .statement {
    max-width: 65%;
  }
}

.part2-wrapper {
  background-color: #353432;
}
.part2 {
  min-height: 10em;
  padding: 6em 4em;
}
#statement-title {
  color: white;
}
</style>
