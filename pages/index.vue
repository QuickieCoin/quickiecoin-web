<template>
  <main>
    <div :style="{ backgroundImage: `url(${douroBackground})` }" class="container w-auto sub-section bg-fixed bg-no-repeat bg-cover quickiecoin-background">
      <div class="absolute z-0 block p-8 left-0 w-1/3">
        <h1 style="top: 10%; width: 380px;" class="title font-medium">
          The easiest way to buy Bitcoin.
        </h1>
      </div>
    </div>
    <div class="container w-full sub-section how-it-works-background">
      <div class="w-full">
        <h1 class="title">
          How it works
        </h1>

        <div class="flex flex-wrap mb-4 m-auto">
          <div class="m-2 flex-1">
            <img style="clip-path: circle(40%);" src="~/assets/images/get-bitcoins-step-1.gif">
            <h2 class="subtitle flex-1">
              Scan your wallet
            </h2>
          </div>
          <div class="m-2 flex-1">
            <img style="clip-path: circle(40%);" src="~/assets/images/get-bitcoins-step-2.gif">
            <h2 class="subtitle flex-1">
              Insert cash
            </h2>
          </div>
          <div class="m-2 flex-1">
            <img style="clip-path: circle(40%);" src="~/assets/images/get-bitcoins-step-3.gif">
            <h2 class="subtitle flex-1">
              Send Bitcoin
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container w-full sub-section contact-section">
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

.contact-section {
  background-color: black;
}
</style>
