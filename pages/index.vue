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
          <div v-for="(step, index) in steps" :key="`step-${index+1}`" class="m-2 flex-1">
            <video autoplay loop muted playsinline style="clip-path: circle(40%);">
              <source :src="mp4s[index]" :alt="step" type="video/webm">
              <source :src="webms[index]" :alt="step" type="video/mp4">
            </video>
            <h2 class="subtitle flex-1">
              {{ step }}
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
import step1webm from '~/assets/images/get-bitcoins-step-1.webm'
import step1mp4 from '~/assets/images/get-bitcoins-step-1.mp4'
import step2webm from '~/assets/images/get-bitcoins-step-2.webm'
import step2mp4 from '~/assets/images/get-bitcoins-step-2.mp4'
import step3webm from '~/assets/images/get-bitcoins-step-3.webm'
import step3mp4 from '~/assets/images/get-bitcoins-step-3.mp4'

import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  data () {
    return {
      douroBackground,
      steps: ['Scan Your Wallet', 'Insert Cash', 'Send Bitcoin'],
      mp4s: [step1mp4, step2mp4, step3mp4],
      webms: [step1webm, step2webm, step3webm]
    }
  },
  head () {
    return {
      script: [{ src: 'https://embed.small.chat/TBRGBNPL0GCCGPR9KK.js' }]
    }
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
