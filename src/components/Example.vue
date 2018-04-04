<template lang="html">
  <span>{{text}}</span>
</template>

<script>
import iServices from '@/services/IncidentServices'

export default {
  name: 'Example',
  data () {
    return {
      text: 'OSIS!'
    }
  }
}
</script>

<style lang="css">
</style>
