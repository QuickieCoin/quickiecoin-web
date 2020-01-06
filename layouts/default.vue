<template>
  <div>
    <header class="flex fixed w-full items-center justify-between flex-wrap bg-white-500 p-6">
      <nav class="inner" role="navigation">
        <router-link to="/" exact>
          <img class="logo max-w-xs" src="~/assets/images/logo.png" alt="logo">
        </router-link>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <router-link v-for="(list, key) in links" :key="key" :to="`/${key}`">
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-400 hover:text-teal mr-4">
                {{ list.title }}
              </a>
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [{ key: 'loc', title: 'location' }, { key: 'about', title: 'about' }]

    }
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
