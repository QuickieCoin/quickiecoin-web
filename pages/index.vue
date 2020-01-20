<template>
  <main>
    <div :style="{ backgroundImage: `url(${douroBackground})` }" class="container w-full sub-section bg-fixed bg-no-repeat bg-cover quickiecoin-background">
      <div class="absolute z-0 block p-8 left-0 w-1/3">
        <h1 class="title font-medium">
          The easiest way to buy Bitcoin.
        </h1>
      </div>
    </div>
    <div class="container w-full sub-section how-it-works-background">
      <div>
        <h1 class="title">
          How it works
        </h1>

        <div class="flex items-center w-2/3 m-auto">
          <img style="clip-path: circle(45%);" class="flex-1 text-center px-4 py-2 m-2 w-1/6" src="~/assets/images/get-bitcoins-step-1.gif" alt="logo">
          <img style="clip-path: circle(45%);" class="flex-1 text-center px-4 py-2 m-2 w-1/6" src="~/assets/images/get-bitcoins-step-2.gif" alt="logo">
          <img style="clip-path: circle(45%);" class="flex-1 text-center px-4 py-2 m-2 w-1/6" src="~/assets/images/get-bitcoins-step-3.gif" alt="logo">
        </div>

        <div class="flex items-center w-2/3 m-auto">
          <h2 class="subtitle flex-1">
            Scan your wallet
          </h2>
          <h2 class="subtitle flex-1">
            Insert cash
          </h2>
          <h2 class="subtitle flex-1">
            Send Bitcoin
          </h2>
        </div>
      </div>
    </div>
    <div class="container w-full sub-section bg-teal-600">
      <ContactForm />
    </div>
  </main>
</template>

<script>

import douroBackground from '~/assets/images/douro.jpg'

import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  data () {
    return { douroBackground }
  }
}
</script>

<style>
.how-it-works-background {
  background-color: #5c9dd5;
  /* USE CSS VARIABLES */
}
</style>
