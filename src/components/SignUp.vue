<template lang="html">
  <section class="hero is-success is-fullheight container">
    <div class=""></div>
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Sign Up</h3>
          <div class="box">
            <figure class="avatar">
              <img height="128" width="128" src='https://image.flaticon.com/icons/svg/179/179948.svg'>
            </figure>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" v-model="form.name" placeholder="Your Name" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" v-model="form.dni" placeholder="Your DNI">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" v-model="form.email" placeholder="Your Email">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" v-model="form.cellphone" placeholder="Your Cellphone">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" v-model="form.password" placeholder="Your Password">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" v-model="draftPassword" placeholder="Confirm Password">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <select class="input select" v-model="gender" placeholder="dependence">
                    <option selected value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
              </div>
              <button @click="submit()" class="button is-block is-info is-large is-fullwidth">Sign Me Up</button>
          </div>
          <p class="has-text-grey">
            <router-link to="/" exact>
              <a>Sign In</a> &nbsp;·&nbsp;
            </router-link>
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
  </section>
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
  computed: {
    isValidPassword () {
      return this.password == this.draftPassword
    }
  },
  methods: {
    submit () {
      if (this.isValidPassword) {
        iServices.signup(this.form).then((response) => {
          console.log(response)
          console.log('Wait your confirmation')
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
