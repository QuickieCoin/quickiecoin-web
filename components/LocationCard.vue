<template>
  <div class="flex -mb-4">
    <div class="w-1/3 mb-4">
      <div class="mb-8">
        <div class="text-black font-bold text-xl mb-2">
          {{ location.Location }}
        </div>
        <p class="text-grey-darker text-base">
          {{ location.Address }}
        </p>
        <p class="text-grey-darker text-base">
          Buy Bitcoin at this location
          <!-- Add " or sell" for Waska -->
        </p>
        <p class="text-grey-darker text-base location-hours">
          {{ location.Hours.trim() }}
        </p>
      </div>
    </div>
    <div
      :style="{ backgroundImage: `url('${location.Image[0].url}')` }"
      class="w-1/3 mb-4 atm-image"
      :title="`${location.Name} image`" />
    <div class="w-1/3 mb-4 atm-image">
    </div>
  </div>
</template>

<script>

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
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .location-hours {
    white-space: pre;
  }
  .atm-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 16rem;
    height: 16rem;
  }
</style>
