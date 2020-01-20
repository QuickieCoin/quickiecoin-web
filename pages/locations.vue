<template>
  <main>
    <div class="container sub-section">
      <div>
        <h1 class="title">
          Locations
        </h1>
        <div v-for="location in locations" v-bind:key="location.name">
          {{ location.Location }} @ {{ location.Address }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
const apiData = require('~/common/api')

export default {
  data () {
    const locationData = apiData.locations
      .map(location => location.fields)
      .filter(location => !!location.Name)

    return {
      locations: locationData
    }
  }
  // asyncData ({ params }) {
  //   axios.get(`/api/locations`)
  // }
}
</script>

<style>
</style>
