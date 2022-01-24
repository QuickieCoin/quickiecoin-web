<template>
  <footer class="flex justify-between items-center border-t-2 py-5 mb-16">
    <div>
      <ul class="flex row">
        <li class="px-5">
          <a class="nav-links text-blue-900" target="_blank" href="/privacy">Privacy Policy</a>
        </li>
        <li class="px-5">
          <a class="nav-links text-blue-900" target="_blank" href="/terms">Terms and Conditions</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-row">
      <a v-for="social in socials" :href="`http://${social}.com/quickiecoin`" :key="`social-${social}`" target="_blank">
        <img :height="iconSize" :width="iconSize" :src="logos[social]" class="mx-2">
      </a>
      <a class="flex flex-row" href="mailto:team@quickiecoin.com">
        <img :height="iconSize" :width="iconSize" :src="logos.mail" class="mx-2">
        <span class="mr-2">team@quickiecoin.com</span>
      </a>
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
