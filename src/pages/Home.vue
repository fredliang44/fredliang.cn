<template>
  <div>
    <Background/>
    <PersonalInfo/>
    <WhoAmI/>
    <Footer/>
  </div>
</template>

<script>
import Background from '../components/Background.vue'
import PersonalInfo from '../components/PersonalInfo.vue'
import WhoAmI from '../components/WhoAmI.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Background,
    PersonalInfo,
    WhoAmI,
    Footer
  }
}
</script>

