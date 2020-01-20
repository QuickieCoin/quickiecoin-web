<template>
  <header>
    <nav class="flex items-center justify-between p-6 border-b w-full fixed bg-white qc-nav">
      <router-link to="/" exact>
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img class="logo max-w-xs" src="~/assets/images/logo.png" alt="logo">
        </div>
      </router-link>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm">
          <span v-for="link in links" v-bind:key="link.title">
            <router-link :to="`/${link.url}`">
              <a class="mt-4 lg:inline-block lg:mt-0 quickiecoin-text quickiecoin-link mr-4">
                {{ link.title }}
              </a>
            </router-link>
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: [{ url: 'locations', title: 'Locations' }, { url: 'faq', title: 'FAQ' }]
    }
  }
}
</script>

<style>
.qc-nav {
  z-index: 1;
}
</style>
