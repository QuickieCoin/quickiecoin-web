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

        <div v-for="location in locations" v-bind:key="location.id">
          <LocationCard :location="location" class="m-4 w-full" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LocationCard from '~/components/LocationCard.vue'
// import Map from '~/components/Map.vue'

export default {
  components: {
    LocationCard
    // Map
  },
  computed: {
    locations () {
      return this.$store.state.locations
    }
  }
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
