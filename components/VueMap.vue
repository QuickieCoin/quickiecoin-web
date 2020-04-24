<template>
  <div>
    <GMap
      ref="gMap"
      :center="{lat: location.lat, lng: location.long}"
      :options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative'}"
      :zoom="15"
    >
      <GMapMarker
        :key="location._id"
        :position="{lat: location.lat, lng: location.long}"
        :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
        @click="currentLocation = {lat: location.lat, lng: location.long}"
      >
        <GMapInfoWindow>
          <b>{{ location.location }}</b>
          <br>
          <br>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </div>
</template>

<script>
import qpin from '~/assets/images/qpin.png'

export default {
  props: {
    location: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      currentLocation: { lat: this.location.lat, lng: this.location.long },
      pins: {
        notSelected: qpin,
        selected: qpin
      }
    }
  }
}
</script>

<style lang="scss">
.GMap__Wrapper {
  width: 350px;
  height: 350px;
}
</style>
