<template>
  <div
    class="p-5 m-3 shadow rounded bg-white hover:bg-yellow-100 md:mx-0 lg:mx-0"
    @click="readmore(data.judul, data.id)"
  >
    <!-- {{ data }} -->
    <h1 class="text-lg text-gray-800">{{ data.judul }}</h1>
    <div class="p-1">
      <p class="text-md text-gray-700">{{ data.kontent.slice(0, 200) }} ....</p>
    </div>
    <div>
      <div class="mt-2">
        <div
          class="px-4 py-1 text-gray-200 inline text-sm rounded-sm"
          :class="colorTag"
        >
          <span style="color: yellow">#</span>Nodemcu
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colorTag: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    readmore(judul, Id) {
      const seoSlug = judul.replaceAll(' ', '-')
      this.$router.push({ path: `/blog/${seoSlug}`, query: { id: Id } })
    },
  },
}
</script>

<style></style>
