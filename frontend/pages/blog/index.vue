<template>
  <div>
    <Navbars />
    <div class="container mx-auto mt-5">
      <div v-for="datas in data" :key="datas.id">
        <MainCard colorTag="bg-indigo-400" :data="datas" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, error }) {
    try {
      const tutorials = await $strapi.find('tutorials')
      return {
        data: tutorials,
      }
    } catch (e) {
      return {
        data: e,
      }
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
