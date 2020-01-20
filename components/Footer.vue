<template>
  <footer class="items-center justify-between p-3 border-t w-full bg-white">
    <a href="mailto:team@quickiecoin.com">
      <font-awesome-icon :icon="['fas', 'envelope']" class="icon alt" />
      <span class="mr-2">team@quickiecoin.com</span>
    </a>
    <a target="_blank" href="http://twitter.com/quickiecoin">
      <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
    </a>
    <a target="_blank" href="http://instagram.com/quickiecoin">
      <font-awesome-icon :icon="['fab', 'instagram']" class="icon alt" />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
