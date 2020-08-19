<template>
  <footer class="flex justify-between items-center border-t-2">
    <div>
      <ul class="flex row">
        <li class="px-5">
          <a class="nav-links text-blue-900" href="/privacy">Privacy Policy</a>
        </li>
        <li class="px-5">
          <a class="nav-links text-blue-900" href="/terms">Terms and Conditions</a>
        </li>
      </ul>
    </div>
    <div>
      <a href="mailto:team@quickiecoin.com">
        <font-awesome-icon :icon="['fas', 'envelope']" size="xs" class="icon alt" />
        <span class="mr-2">team@quickiecoin.com</span>
      </a>
    </div>
    <div>
      <a v-for="social in socials" :href="`http://${social}.com/quickiecoin`" :key="`social-${social}`" target="_blank">
        <font-awesome-icon :icon="['fab', social]" size="3x" class="icon alt mx-3" />
      </a>
    </div>
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
