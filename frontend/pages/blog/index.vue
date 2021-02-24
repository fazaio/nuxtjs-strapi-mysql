<template>
  <div>
    <navbars />
    <div class="container mx-auto mt-5">
      <maincard colorTag="bg-indigo-400" />
      <maincard colorTag="bg-indigo-400" />
      <maincard colorTag="bg-indigo-400" />
      <maincard colorTag="bg-red-400" />
      <maincard colorTag="bg-green-400" />
      <maincard colorTag="bg-red-400" />
    </div>
  </div>
</template>

<script>
import Maincard from '../../components/MainCard'
import navbars from '../../components/navbars'

export default {
  components: {
    navbars,
    Maincard,
  },
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
