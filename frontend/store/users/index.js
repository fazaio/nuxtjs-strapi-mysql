export const actions = {
  signIn({ commit }, payload) {
    commit('response/loading', true, { root: true })
    // commit('response/response', payload, { root: true })
    this.$strapi
      .login({
        identifier: 'adam@gmail.com',
        password: 'qwe123QWE!@#',
      })
      .then(
        (res) => {
          commit('response/response', res, { root: true })
        },
        (err) => {
          commit('response/response', err, { root: true })
        }
      )
  },
}
