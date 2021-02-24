<template>
  <div>
    <h1>hello</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const tutorials = await $strapi.find('tutorials')
    return {
      data: tutorials,
    }
  },
  data() {
    return {
      tutorials: '',
    }
  },
}
</script>

<style></style>
