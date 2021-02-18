<template>
  <h1>hello this user page</h1>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    user() {
      return this.$strapi.user
    },
  },
}
</script>

<style></style>
