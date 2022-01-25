<template>
  <div class="w-full max-w-xl">
    <!-- TODO: Better Success handling -->
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      name="wire-form"
      action="/pages/wire-signup"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="wire-form">
      <p class="hidden">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field">
        </label>
      </p>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-xl font-bold mb-2"
          for="name"
        >Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Satoshi Nakamoto"
          data-hj-whitelist
        >
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-xl font-bold mb-2"
          for="email"
        >Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="satoshi@nakamoto.com"
          data-hj-whitelist
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          :disabled="!canSubmit"
          :class="
            `${!canSubmit &&
              'opacity-50 cursor-not-allowed'} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`
          "
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'WireForm',
  data () {
    return {
      email: '',
      name: ''
    }
  },
  computed: {
    canSubmit () {
      return this.email && this.email.includes('@') && this.email.includes('.') && this.name
    }
  }
}
</script>

<style></style>
