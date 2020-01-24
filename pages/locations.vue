<template>
  <main>
    <div class="container sub-section">
      <div class="location-section w-full">
        <h1 class="title">
          Locations
        </h1>
        <div>
          <!-- <Map/> -->
        </div>

        <div v-for="location in locations" v-bind:key="location.name">
          <LocationCard class="m-4 w-full" :location="location" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LocationCard from '~/components/LocationCard.vue'
// import Map from '~/components/Map.vue'

const apiData = require('~/common/api')

export default {
  components: {
    LocationCard
    // Map
  },
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

<style lang="scss">
.location-section {
  display: block;
  width: 60vw;
  margin: 85px auto;

  .title {
    color: black;
    margin: 20px 0;
  }
}
</style>
