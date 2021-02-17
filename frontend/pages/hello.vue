<template>
  <div>
    data {{ result }} - {{ error }} <br /><br />
    loading:{{ loading }} - respone:{{ response }}
    <button @click="login()">Masuk</button>
    <button @click="logout()">Keluar</button>
    <p v-if="$strapi.user">Logged in</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  data() {
    return {
      result: 'res',
      error: 'err',
    }
  },
  computed: {
    ...mapGetters({
      response: 'response/response',
      loading: 'response/loading',
    }),
    user() {
      return this.$strapi.user
    },
  },
  methods: {
    login() {
      this.$store.dispatch('users/signIn')
    },
    logout() {
      this.$strapi.logout()
    },
  },
}
</script>

<style></style>
