<template>
  <div class="flex flex-wrap -mx-2">
    <div class="sm:w-1/2 md:w-1/3 px-2">
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
    <div class="sm:w-1/2 md:w-1/3 px-2">
      <img v-if="location.thumb" :src="imageUrlFor( location.thumb ).height(400)" class="object-contain">
    </div>
    <div class="sm:w-1/2 md:w-1/3 px-2">
      <VueMap :location="location" />
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import VueMap from '~/components/VueMap.vue'

const defaultLocation = {
  Location: 'Could not find',
  Address: 'Address not available'
}

export default {
  name: 'LocationCard',
  components: {
    VueMap
  },
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
</style>
