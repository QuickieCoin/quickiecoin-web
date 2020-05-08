<template>
  <main>
    <div class="container sub-section">
      <div class="location-section w-full">
        <h1 class="title">
          Locations
        </h1>
        <div v-for="location in locations.filter(location => location.open)" v-bind:key="location.id">
          <LocationCard :location="location" class="m-4 w-full" />
        </div>

        <div v-for="location in locations.filter(location => !location.open)" v-bind:key="location.id">
          <div class="currently-closed">
            <LocationCard :location="location" class="m-4 w-full" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LocationCard from '~/components/LocationCard.vue'

export default {
  head () {
    return {
      title: 'Locations',
      meta: [
        { hid: 'description', name: 'description', content: 'The location of all QuickieCoin ATMs throughout New Jersey.' }
      ]
    }
  },
  transition: 'slide-left',
  components: {
    LocationCard
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

  .currently-closed {
    opacity: 0.3;
  }
}
</style>
