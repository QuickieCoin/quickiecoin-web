export const state = () => ({
  locations: [],
  faqs: []
})

export const mutations = {
  setContent (state, { faqs, locations }) {
    state.locations = faqs
    state.faqs = locations
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const locations = await this.$sanity.fetch('*[_type == "machine"]')
    const faqs = await this.$sanity.fetch('*[_type == "faqs"]')

    await commit('setContent', { faqs, locations })
  }
}
