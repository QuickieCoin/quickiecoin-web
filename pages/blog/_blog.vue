<template>
  <article class="container">
    <h1>{{ blogPost.title }}</h1>
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>

<script>
export default {
  asyncData ({ params, payload }) {
    if (payload) { return { blogPost: payload } } else {
      return {
        blogPost: []
      }
    }
  }
}
</script>
