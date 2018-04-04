<template lang="html">

</template>

<script>
import iServices from '@/services/incidentServices'
export default {
  name: 'SignUp',
  data () {
    return {
      form: {
        email: '',
        password: '',
        name: '',
        lastname: '',
        dni: '',
        cellphone: '',
        dependence: ''
      },
      draftPassword: ''
    }
  },
  computed () {
    isValidPassword () {
      return this.password == this.draftPassword
    }
  },
  methods: {
    submit () {
      if (this.isValidPassword) {
        iServices.signup(this.form).then((response) => {
          console.log('Wait your confirmation')
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
