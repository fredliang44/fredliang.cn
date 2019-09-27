<template>
  <div>
    <Background />
    <PersonalInfo />
    <WhoAmI />
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import PersonalInfo from '@/components/PersonalInfo.vue'
import WhoAmI from '@/components/WhoAmI.vue'

export default {
  name: 'Home',
  components: {
    Background,
    PersonalInfo,
    WhoAmI
  }
}
</script>

