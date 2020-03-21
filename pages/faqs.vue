<template>
  <main>
    <div class="container sub-section">
      <div class="faq-section w-full">
        <h1 class="title">
          FAQs
        </h1>

        <div v-for="faqType in faqs" v-bind:key="faqType.id">
          {{ faq }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    faqs () {
      return this.$store.state.faqs
    }
  }
}
</script>

<style lang="scss">
.faq-section {
  display: block;
  width: 60vw;
  margin: 85px auto;

  .title {
    color: black;
    margin: 20px 0;
  }
}
</style>
