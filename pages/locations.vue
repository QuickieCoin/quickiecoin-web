<template>
  <main>
    <div class="container sub-section">
      <div>
        <h1 class="title">
          Locations
        </h1>
        <div v-for="location in locations">
          {{ location.name }} @ {{ location.store }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { locations } from '~/common/api'

export default {
  data () {
    return {
      locations
    }
  }
}
</script>

<style>
</style>
