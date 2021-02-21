<template>
  <div>
    <h1>hello its user page</h1>
    <br />
    <p v-if="$strapi.user">{{ $strapi.user.username }}</p>
    <br />
    <div @click="logout()">logout</div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  async asyncData({ $strapi }) {
    return await $strapi.user
  },
  computed: {
    user() {
      return this.$strapi.user
    },
  },
  methods: {
    logout() {
      this.$strapi.logout()
      this.$strapi.clearToken()
      this.$cookies.remove('strapi_jwt', {
        path: '/member',
      })
      this.$router.push('/member/auth')
    },
  },
}
</script>

<style></style>
