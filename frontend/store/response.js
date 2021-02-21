export const state = () => ({
  response: '',
  loading: false,
})

export const actions = {
  clear({ commit }) {
    commit('clear')
  },
}

export const mutations = {
  response(state, payload) {
    state.response = payload
  },
  loading(state, payload) {
    state.loading = payload
  },
  clear(state) {
    state.loading = ''
    state.response = ''
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
