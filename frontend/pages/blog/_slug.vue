<template>
  <div>
    <Navbars />
    <div class="container mx-auto mt-5">
      <div v-if="data">
        <CardDetail :data="data" />
      </div>
      <div v-else><h1>invalid page</h1></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ query, $strapi, $content }) {
    try {
      const result = await $strapi.$tutorials.find({
        id: query.id,
      })
      return {
        data: result[0],
      }
    } catch (error) {
      return { error }
    }
  },
  head() {
    return {
      title: this.data.judul, // For SEO
      meta: [
        {
          content: this.data.kontent,
        },
      ],
    }
  },
}
</script>

<style></style>
