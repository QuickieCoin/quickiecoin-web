<template>
  <div>
    <NavBar class="z-1" />
    <nuxt />
    <footer class="items-center justify-between p-3 border-t w-full bg-white">
      Insert Icons Here
    </footer>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: futura-lt-w01-book,sans-serif;
  display: block;
  font-size: 46px;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.container.sub-section {
    max-width: 100%;
}

.links {
  padding-top: 15px;
}

.quickiecoin-text {
  color: #599bd5;
}

.quickiecoin-link:hover {
  color: #306594;
}
</style>
