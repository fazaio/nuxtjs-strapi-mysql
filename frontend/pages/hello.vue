<template>
  <div>
    data {{ result }} - {{ error }}
    <button @click="but()">pencet</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: 'res',
      error: 'err',
    }
  },
  methods: {
    async but() {
      try {
        this.result = await this.$strapi.login({
          identifier: 'wowon',
          password: 'winarwon',
        })
      } catch (e) {
        this.error = e
      }
    },
  },
}
</script>

<style></style>
