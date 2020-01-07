<template>
  <main>
    <div class="container w-full sub-section quickiecoin-background">
      <div>
        <h1 class="title">
          Quickiecoin
        </h1>
        <h2 class="subtitle">
          The quickest way to Bitcoin
        </h2>
      </div>
    </div>
    <div class="container w-full sub-section">
      <div>
        <h1 class="title">
          How it works
        </h1>
        <h2 class="subtitle">
          It's easy!
        </h2>
      </div>
    </div>
    <div class="container w-full sub-section bg-teal-600">
      <ContactForm/>
    </div>
  </main>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}
</script>

<style>

</style>
