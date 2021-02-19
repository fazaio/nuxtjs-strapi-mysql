<template>
  <div>
    <h1>hello its user page</h1>
    <br />
    <p v-if="$strapi.user">{{ $strapi.user }}</p>
    <br />
    <div @click="logout()">logout</div>
    <div @click="redir()">redir</div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    user() {
      return this.$strapi.user
    },
  },
  methods: {
    logout() {
      this.$strapi.logout()
      this.$strapi.clearToken()
      // this.$router.push('/')
    },
    redir() {
      this.$router.push('/member/auth')
    },
  },
}
</script>

<style></style>
