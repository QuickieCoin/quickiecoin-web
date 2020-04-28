<template>
  <div class="w-full max-w-xl">
    <h1 class="subtitle">
      Contact Us
    </h1>
    <!-- TODO: Better Success handling -->
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-xl font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="satoshi@nakamoto.com"
          data-hj-whitelist
        >
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-xl font-bold mb-2"
          for="name"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Satoshi Nakamoto"
          data-hj-whitelist
        >
      </div>
      <label class="block mb-2">
        <label
          class="block text-gray-700 text-xl font-bold mb-2"
          for="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-textarea mt-1 block w-full"
          rows="3"
          placeholder="Enter your message here..."
          data-hj-whitelist
        />
      </label>

      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Submit
        </button>
      </div>
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
