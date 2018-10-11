<template>
    <div class="part2-wrapper">
      <div class="part2"  :class="this.$i18n.locale">
        <h1 id="statement-title" :class="this.$i18n.locale">{{ $t("whoAmI.title") }}</h1>
        <div class="statement">
          <p>{{ $t("whoAmI.highSchool") }}</p>
          <p v-html="$t('whoAmI.college')"></p>
          <p>{{ $t("whoAmI.showWorksDescription") }}</p>
          
          <ul>
            <li>
              <p>
                <a href="//hack.hustunique.com" rel="noopener" target="_blank">
                Unique Hackday
                </a> ---- {{ $t("whoAmI.workList[0]") }}
              </p>
            </li>

            <li>
              <p>
                <a href="//console.hack.hustunique.com" rel="noopener" target="_blank">
                Unique Hackday Console
                </a> ---- {{ $t("whoAmI.workList[1]") }}
              </p>
            </li>
            <li><p><a href="//fmt.hustunique.com" rel="noopener" target="_blank">Family Tree</a> ---- {{ $t("whoAmI.workList[2]") }}</p></li>
          </ul>
          
          <p>{{ $t("whoAmI.besides") }}</p>
          <ul>
            <li><p><a href="//manager.fredliang.cn" rel="noopener" target="_blank">Rancher</a> ---- {{ $t("whoAmI.infrastructuresDescription[0]") }}</p></li>
            <li><p><a href="//data.fredliang.cn" rel="noopener" target="_blank">Metabase</a> ---- {{ $t("whoAmI.infrastructuresDescription[1]") }}</p></li>
            <li><p><a href="//open.hustunique.com" rel="noopener" target="_blank">Open Platform</a> ---- {{ $t("whoAmI.infrastructuresDescription[2]") }}</p></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'WhoAmI'

}
</script>


<style>
p > a {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-decoration: underline !important;
  color: white !important;
}

ul, li > p {
  margin: 0;
}
.statement > p {
  color: white;
  font-size: 1.2em;
  text-align: left;
}
.statement > ul > li > p {
  color: #b9b9b9;
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
.statement > ul > li {
  display: block;
}
</style>
