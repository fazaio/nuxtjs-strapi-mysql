export const state = () => ({
  response: 'res',
  loading: false,
})

export const actions = {}

export const mutations = {
  response(state, payload) {
    state.response = payload
  },
  loading(state, payload) {
    state.loading = payload
  },
}

export const getters = {
  response(state) {
    return state.response
  },
  loading(state) {
    return state.loading
  },
}
