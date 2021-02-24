<template>
  <div>
    <Navbars />
    <div class="container mx-auto mt-5">
      <div v-if="result[0]">
        <CardDetail :data="result[0]" />
      </div>
      <div v-else><h1>invalid page</h1></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ query, $strapi }) {
    try {
      const result = await $strapi.$tutorials.find({
        id: query.id,
      })
      return { result }
    } catch (error) {
      return { error }
    }
  },
}
</script>

<style></style>
