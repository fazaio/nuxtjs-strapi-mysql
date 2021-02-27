<template>
  <div class="p-5 m-3 shadow rounded bg-white md:mx-0 lg:mx-0">
    <h1 class="text-gray-800">{{ data.judul }}</h1>
    <div class="p-1 text-gray-700 text-jusify">
      <div v-html="$md.render(model)"></div>
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
// import { getStrapiMedia } from '../utils/medias'
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    model() {
      return this.data.kontent
        .split('/uploads/')
        .join('http://localhost:1337/uploads/')
    },
  },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}
</style>
