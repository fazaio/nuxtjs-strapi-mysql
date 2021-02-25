<template>
  <div>
    <Navbars />
    <div class="container mx-auto">
      <div class="p-5 bg-white shadow round mt-5" @click="blog">
        <h1>All Blog Page</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    blog() {
      this.$router.push('/blog')
    },
  },
}
</script>
