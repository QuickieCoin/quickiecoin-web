<template>
  <header>
    <nav class="flex items-center justify-between p-6 border-b w-full fixed bg-white qc-nav">
      <NuxtLink to="/" exact>
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img class="logo max-w-xs" src="~/assets/images/logo.png" alt="logo">
        </div>
      </NuxtLink>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <span v-for="link in links" v-bind:key="link.title">
            <NuxtLink :to="`/${link.url}`">
              <a class="mt-4 lg:inline-block lg:mt-0 quickiecoin-text quickiecoin-link mr-4">
                {{ link.title }}
              </a>
            </NuxtLink>
          </span>
        </div>
      </div>
      <div class="call-us float-right">
        <a href="tel:12014195933‬">‪201-419-5933‬</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        { url: 'locations', title: 'Locations' }
        // { url: 'faq', title: 'FAQ' }
      ]
    }
  }
}
</script>

<style>
.qc-nav {
  z-index: 1;
}

.call-us {
  background-color: rgba(81, 158, 240, 0.18);
  border: solid rgba(182, 243, 232, 1) 0px;
  cursor: pointer !important;
  padding: 6px;
  border-radius: 36px;
  min-width: 130px;
  text-align: center;
}
</style>
