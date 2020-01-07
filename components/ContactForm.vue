<template>
  <div class="contact-form">
    <h1 class="subtitle">Contact Us</h1>
    <form>
      <div class="input">
        <label>Email</label>
        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="satoshi@nakamoto.com"/>
      </div>
      <div class="input">
        <label>Name</label>
        <input type="text" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Satoshi Nakamoto"/>
      </div>
      <div class="input">
        <label>Message</label>
        <textarea class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="message"/>
      </div>
      <input type="button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
  // props: {
  //   item: {
  //     type: Object,
  //     required: true
  //   }
  // },
  // methods: {
  //   isAbsolute(url) {
  //     return /^https?:\/\//.test(url)
  //   }
  // }
}
</script>

<style>

</style>
