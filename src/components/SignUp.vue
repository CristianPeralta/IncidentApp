<template lang="html">
  <section class="is-fullheight container">
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
                  <select v-model="form.dependence" class="input select" placeholder="dependence">
                    <option v-for="(dependence, index) in allDependences" :value="dependence._id">{{dependence.acronym}}</option>
                  </select>
                </div>
              </div>
              <button @click="submit()" class="button is-block is-info is-large is-fullwidth">Sign Me Up</button>
          </div>
          <p class="has-text-grey">
            <router-link to="/login" exact>
              <a>Login</a> &nbsp;·&nbsp;
            </router-link>
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
  </section>
</template>

<script>
import iServices from '@/services/IncidentServices'
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
      draftPassword: '',
      allDependences: [],
      user: {}
    }
  },
  mounted () {
    this.getDependences()
  },
  methods: {
    submit () {
      if (this.isValidPassword) {
        iServices.signup(this.form).then((response) => {
          this.user = response.data
          console.log('Wait your confirmation')
        })
      } else {
        alert('Password doesnt match')
      }
    },
    getDependences () {
      iServices.getDependences().then((response) => {
          response.data.map((val) => {
            this.allDependences.push(val)
          })
      })
    },
    isValidPassword () {
      return this.password == this.draftPassword
    }
  }
}
</script>

<style lang="css">
</style>
