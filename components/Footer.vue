<template>
  <footer class="items-center p-3 border-t w-full flex justify-center bg-white">
    <span class="float-left">
      <a href="mailto:team@quickiecoin.com">
        <font-awesome-icon :icon="['fas', 'envelope']" class="icon alt" />
        <span class="mr-2">team@quickiecoin.com</span>
      </a>
    </span>
    <span class="float-right">
      <a v-for="social in socials" :href="`http://${social}.com/quickiecoin`" :key="`social-${social}`" target="_blank">
        <font-awesome-icon :style="{fontSize: '48px'}" :icon="['fab', social]" class="icon alt mx-3" />
      </a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      socials: ['instagram', 'twitter']
    }
  }
}
</script>

<style>
</style>
