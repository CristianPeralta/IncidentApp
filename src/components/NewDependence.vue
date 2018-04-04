<template lang="html">
  <div class="">
    <section class="container">
      <div class="columns" style="margin-left : 3rem; margin-top : 0px;">>
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey" style="margin-top : 40px;" >New Dependence</h3>
            <div class="box">
                <figure class="avatar">
                  <img height="128" width="128" :src='preview'>
                  <div class="file is-centered">
                    <label class="file-label">
                      <input class="file-input" type="file" @change="processFile($event)">
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                          Choose a file…
                        </span>
                      </span>
                    </label>
                  </div>
                </figure>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" v-model="form.name" placeholder="Name" autofocus="">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" v-model="form.acronym" placeholder="Acronym">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" v-model="form.annex" placeholder="Annex">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" v-model="form.latitude" placeholder="Latitude">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" v-model="form.longitude" placeholder="Longitude">
                  </div>
                </div>

                <button @click="sendForm()" class="button is-block is-info is-large is-fullwidth">Add</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ChatServices from '@/services/IncidentServices'

export default {
  name: 'NewDependence',
  data () {
    return {
      form: {
        name: '',
        acronym: '',
        annex: '',
        latitude: '',
        longitude: '',
        photoUrl: ''
      },
      preview: 'https://st3.depositphotos.com/5266903/12981/v/950/depositphotos_129812138-stock-illustration-management-office-flat-vector-icon.jpg'
    }
  },
  methods: {
    sendForm () {
      IncidentServices.newDependence(this.form).then((response) => {
          console.log(response)
      })
    },
    processFile (e) {
      this.photoUrl = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);
    }
  }
}
</script>

<style lang="css">
</style>
