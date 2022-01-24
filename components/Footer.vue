<template>
  <footer class="flex-column justify-between items-center border-t-2 mb-8">
    <div class=mt-3>
      <ul class="flex row">
        <li class="px-5 m-auto">
          <a class="nav-links text-blue-900" target="_blank" href="/privacy">Privacy Policy</a>
        </li>
        <li class="px-5 m-auto">
          <a class="nav-links text-blue-900" target="_blank" href="/terms">Terms and Conditions</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-row mt-5">
      <div class="m-auto">
        <a v-for="social in socials" :href="`http://${social}.com/quickiecoin`" :key="`social-${social}`" target="_blank">
          <img :height="iconSize" :width="iconSize" :src="logos[social]" class="inline mx-1">
        </a>
        <a href="mailto:team@quickiecoin.com">
          <img :height="iconSize" :width="iconSize" :src="logos.mail" class="inline mx-1">
          <span>team@quickiecoin.com</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import instagram from '~/assets/images/icons/instagram.svg'
import twitter from '~/assets/images/icons/twitter.svg'
import mail from '~/assets/images/icons/mail.svg'

export default {
  name: 'Footer',
  data () {
    return {
      socials: ['instagram', 'twitter'],
      iconSize: 25,
      logos: {
        twitter, instagram, mail
      }
    }
  }
}
</script>
