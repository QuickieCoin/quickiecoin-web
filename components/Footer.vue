<template>
  <footer class="items-center p-3 border-t w-full flex justify-center bg-white">
    <span class="float-left">
      <a href="mailto:team@quickiecoin.com">
        <font-awesome-icon :icon="['fas', 'envelope']" size="xs" class="icon alt" />
        <span class="mr-2">team@quickiecoin.com</span>
      </a>
    </span>
    <span class="icon-content float-right">
      <a v-for="social in socials" :href="`http://${social}.com/quickiecoin`" :key="`social-${social}`" target="_blank">
        <font-awesome-icon :icon="['fab', social]" size="3x" class="icon alt mx-3" />
      </a>
    </span>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Footer',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      socials: ['instagram', 'twitter']
    }
  }
}
</script>

<style>
.icon-content {
  width: 75px;
  display: flex;
  flex-direction: row;
}
</style>
