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
            <video autoplay loop muted playsinline style="clip-path: circle(50%);">
              <source :src="mp4s[index]" :alt="step" type="video/webm">
              <source :src="webms[index]" :alt="step" type="video/mp4">
              <img :src="gifs[index]" :title="step">
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
import step1gif from '~/assets/images/get-bitcoins-step-1.gif'
import step2webm from '~/assets/images/get-bitcoins-step-2.webm'
import step2mp4 from '~/assets/images/get-bitcoins-step-2.mp4'
import step2gif from '~/assets/images/get-bitcoins-step-2.gif'
import step3webm from '~/assets/images/get-bitcoins-step-3.webm'
import step3mp4 from '~/assets/images/get-bitcoins-step-3.mp4'
import step3gif from '~/assets/images/get-bitcoins-step-3.gif'

import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  transition: 'slide-left',
  data () {
    return {
      douroBackground,
      steps: ['Scan Your Wallet', 'Insert Cash', 'Send Bitcoin'],
      mp4s: [step1mp4, step2mp4, step3mp4],
      webms: [step1webm, step2webm, step3webm],
      gifs: [step1gif, step2gif, step3gif]
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      script: [{ src: 'https://embed.small.chat/TBRGBNPL0GCCGPR9KK.js' }],
      meta: [
        { hid: 'description', name: 'description', content: 'QuickieCoin is the fastest, easiest and most secure way to buy Bitcoin in New Jersey.' }
      ]
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
