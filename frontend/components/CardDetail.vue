<template>
  <div
    class="p-5 m-3 shadow rounded bg-white hover:bg-yellow-100 md:mx-0 lg:mx-0"
  >
    <h1 class="text-lg text-gray-800">{{ data.judul }}</h1>
    <div class="p-1">
      <p class="text-md text-gray-700">{{ data.kontent }}</p>
    </div>
    <div>
      <div class="mt-2">
        <div
          class="px-4 py-1 text-gray-200 inline text-sm rounded-sm bg-indigo-400"
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
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
