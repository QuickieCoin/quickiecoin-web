<template>
  <div class="contact-form w-full">
    <h1 class="subtitle">Contact Us</h1>
    <form>
      <div class="input">
        <label class="w-3/12">Email</label>
        <input
          class="w-8/12 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 mx-4 appearance-none leading-normal"
          type="email"
          placeholder="satoshi@nakamoto.com"/>
      </div>
      <div class="input">
        <label class="w-3/12">Name</label>
        <input
          type="text"
          class="w-8/12 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 mx-4 appearance-none leading-normal"
          placeholder="Satoshi Nakamoto"/>
      </div>
      <div class="input">
        <label class="w-3/12">Message</label>
        <textarea
          class="w-8/12 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 mx-4 appearance-none leading-normal"
          type="message"/>
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
