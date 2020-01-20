<template>
  <main>
    <div class="container sub-section">
      <div>
        <h1 class="title">
          FAQ
        </h1>
        <div v-for="faq in faqs" v-bind:key="faq.id">
          <div>{{ faq.question }}</div> {{ faq.answer }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { faqs } from '~/common/api'

export default {
  data () {
    return {
      faqs
    }
  }
}
</script>

<style>

</style>
