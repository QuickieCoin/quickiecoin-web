<template>
  <div class="flex -mb-4">
    <div class="w-1/3 mb-4">
      <div class="mb-8">
        <div class="text-black font-bold text-xl mb-2">
          {{ location.location }}
        </div>
        <p class="text-grey-darker text-base">
          {{ location.address }}
        </p>
        <p class="text-grey-darker text-base">
          Buy Bitcoin at this location
          <!-- Add " or sell" for Waska -->
        </p>
        <p v-for="storeHour in location.hours" v-bind:key="storeHour" class="text-grey-darker text-base location-hours">
          {{ storeHour.trim() }}
        </p>
      </div>
    </div>
    <!-- <div
      :style="{ backgroundImage: `url('${location.thumb}')` }"
      :title="`${location.name} image`"
      class="w-1/3 mb-4 atm-image"
    /> -->
    <img v-if="location.thumb" :src="imageUrlFor( location.thumb ).width(240)">
    <div class="w-1/3 mb-4 atm-image" />
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

const defaultLocation = {
  Location: 'Could not find',
  Address: 'Address not available'
}

export default {
  name: 'LocationCard',
  // components: {
  //   Map
  // },
  props: {
    location: {
      type: Object,
      default: () => {
        return defaultLocation
      }
    }
  },
  computed: {
    imageBuilder () {
      return imageUrlBuilder(this.$sanity)
    }
  },
  methods: {
    imageUrlFor (source) {
      return this.imageBuilder.image(source)
    }
  }
}
</script>

<style lang="scss">
  .atm-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 16rem;
    height: 16rem;
  }
</style>
