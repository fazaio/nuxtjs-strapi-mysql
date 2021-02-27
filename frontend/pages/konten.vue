<template>
  <article>
    <nuxt-content :document="article" />
    {{ article }}
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('s').fetch()
    return { article }
  },
}
</script>

<style></style>
