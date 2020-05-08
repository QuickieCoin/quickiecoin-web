<template>
  <div class="map">
    <link href="https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css" rel="stylesheet">
    <no-ssr>
      <MglMap
        :access-token="accessToken"
        :map-style="'mapbox://styles/pinpartdev/cj09ooc9g00a12sqpnkum9wcd'"
        :center="[4.7835, 52.3491]"
        :zoom="6"
      >
        <MglGeolocateControl ref="geolocateControl" />
      </MglMap>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'MapBox',
  data () {
    return {
      accessToken: 'pk.eyJ1IjoicXVpY2tpZWNvaW4iLCJhIjoiY2s1cmRhNGt6MDNibTNqcGxqZGNleHQ4eCJ9.kjqPmPxC4R3ECN6NXh6hNw'
    }
  }
}
</script>
